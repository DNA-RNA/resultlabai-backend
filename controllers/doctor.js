const pool=require('../database/keys');
const cloudinary =require('../lib/cloudinary');
const doctor = {};


doctor.getDoctorById = async (req, res) => {
  const id = req.params.id;
  try {
    const doctors = await (
      await pool.query(
        "SELECT * FROM doctors WHERE id=$1",[id]));
    res.status(200).json({doctors});
  } catch (error) {
    res.status(500).json({
      message: "An error has ocurred",
      error,
    });
  }
};

doctor.getPatients = async (req, res) => {
    try {
        const patients = await (
          await pool.query(
            "SELECT * FROM patients"
          )
        ).rows;
        res.status(200).json(patients);
      } catch (error) {
        res.status(500).json({
          message: "An error has ocurred",
          error,
        });
      }
  };

  doctor.getPatientsByDoctorId =async (req, res) => {
    const id = req.params.id;
  try {
    const patients = await (
      await pool.query(
        "SELECT * FROM patients WHERE doctor_id=$1",[id]));
    res.status(200).json({patients});
  } catch (error) {
    res.status(500).json({
      message: "An error has ocurred",
      error,
    });
  }
    
  };
  doctor.getResults = async (req, res) => {
    try {
        const results = await (
          await pool.query(
            "SELECT * FROM results"
          )
        ).rows;
        res.status(200).json(results);
      } catch (error) {
        res.status(500).json({
          message: "An error has ocurred",
          error,
        });
        
      }
  };
  
  doctor.addResult = async (req,res) =>{
   
      const { id, file_path,status,patient_id,doctor_id } = req.body;
      try {
        await pool.query('INSERT INTO results (id, file_path,status,patient_id,doctor_id) VALUES ($1, $2, $3, $4, $5)', [id, file_path,status,patient_id,doctor_id]);
        const admins = await (await pool.query('SELECT * FROM results ORDER BY id DESC LIMIT 1')).rows[0];
        res.status(200).json({
          message: 'Successful added result/rontgen',
          admins
        })
      } catch (error) {
        res.status(500).json({
          message: 'An error has ocurred',
          error
        })
      }
    
  };

  doctor.deleteResult = async (req, res) => {
    const id = req.params.id;
    try {
      await pool.query('DELETE FROM results WHERE id=$1', [id]);
      res.status(200).json({
        message: 'Successful deleted result'
      })
    } catch (error) {
      res.status(500).json({
        message: 'An error has ocurred',
        error
      })
    }
  };
  doctor.updateResult = async (req, res)=>{
    const id = req.params.id;
    const {file_path,status,patient_id,doctor_id} = req.body;
     try {
        await pool.query('UPDATE results SET file_path=$1, status=$2, patient_id=$3,doctor_id=$4 WHERE id=$5', [file_path,status,patient_id,doctor_id, id]);
         res.status(200).json({
            message: 'Successful edited result',
            result: {file_path,status,patient_id,doctor_id}
        })
     } catch (error) {
      res.status(500).json({
             message: 'An error has ocurred',
             error
         })
        
    }
  };
  
  doctor.getResultsNotes = async (req, res) => {
    try {
        const result_notes = await (
          await pool.query(
            "SELECT * FROM result_notes"
          )
        ).rows;
        res.status(200).json(result_notes);
      } catch (error) {
        res.status(500).json({
          message: "An error has ocurred",
          error,
        });
        
      }
  };
  
  doctor.addResultNotes = async (req,res) =>{
   
    const { id, text,created_at,updated_at,result_id } = req.body;
    try {
      await pool.query('INSERT INTO result_notes (id, text,created_at,updated_at,result_id) VALUES ($1, $2, $3, $4, $5)', [id, text,created_at,updated_at,result_id]);
      const result_notes = await (await pool.query('SELECT * FROM result_notes ORDER BY id DESC LIMIT 1')).rows[0];
      res.status(200).json({
        message: 'Successful added result notes',
        result_notes
      })
    } catch (error) {
      res.status(500).json({
        message: 'An error has ocurred',
        error
      })
    }
  
};
doctor.deleteResultNotes = async (req, res) => {
  const id = req.params.id;
  try {
    await pool.query('DELETE FROM  result_notes WHERE id=$1', [id]);
    res.status(200).json({
      message: 'Successful deleted result notes'
    })
  } catch (error) {
    res.status(500).json({
      message: 'An error has ocurred',
      error
    })
  }
};
 doctor.updateResultNotes = async (req, res)=>{
   const id = req.params.id;
   const {text, created_at, updated_at,result_id} = req.body;
    try {
       await pool.query('UPDATE result_notes SET text=$1 created_at=$2, updated_at=$3,result_id=$4 WHERE id_c=$5', [text, created_at, updated_at,result_id, id]);
        res.status(200).json({
           message: 'Successful edited result notes',
           result: {text, created_at,updated_at,result_id}
       })
    } catch (error) {
     res.status(500).json({
            message: 'An error has ocurred',
            error
        })
   }
 };

 doctor.getPatientWithResult = async(req,res)=>{
  const id = req.params.id;
   try {
       const result = await (await pool.query('SELECT rs.file_path,pt.first_name,pt.last_name,pt.gender,pt.age,pt.birth_date FROM results rs INNER JOIN patients pt on rs.patient_id=pt.id WHERE pt.id=$1', [id]));
         res.status(200).json({result});
     } catch (error) {
        res.status(500).json({
              message: 'An error has ocurred',
           error
        })
        console.log(error);
     }

};
  
  module.exports = doctor;
  
