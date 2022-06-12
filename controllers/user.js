const pool=require('../database/keys');
const cloudinary =require('../lib/cloudinary');
const user = {};


user.getUserPayment= async (req, res) => {
  
  try {
    const users = await (
      await pool.query(
        "SELECT * FROM user_payment"
      )
    ).rows;
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "An error has ocurred",
      error,
    });
  }
};
//user payment crud

user.addUserPayment = async (req, res) => {
 
  const id = req.params.id;

  const {user_id,status} = req.body;
  const period = await cloudinary(req.files.period.tempFilePath);
  try {
    await pool.query(
      "INSERT INTO user_payment (period(aylık/yıllık), status, user_id) VALUES ($1, $2, $3)",
      [ period, status, user_id,],id
    );
    res.status(200).json({
      message: "Successful added user payment",
      period,
      user_id
    
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has ocurred",
      error,
    });
  }
};
user.updateUserPayment = async (req, res)=>{
  const id = req.params.id;
  const {period,status,user_id} = req.body;
   try {
      await pool.query('UPDATE  user_payment SET (period(aylık/yıllık)=$1, status=$2, user_id=$3 WHERE id=$4', [period,status,user_id, id]);
       res.status(200).json({
          message: 'Successful edited userpayment',
          result: {period,status,user_id}
      })
   } catch (error) {
    res.status(500).json({
           message: 'An error has ocurred',
           error
       })
      
  }
};

user.deleteUserPayment = async (req, res) => {
  const id = req.params.id;
  try {
    await pool.query('DELETE FROM user_payment WHERE id=$1', [id]);
    res.status(200).json({
      message: 'Successful deleted userpaymnet'
    })
  } catch (error) {
    res.status(500).json({
      message: 'An error has ocurred',
      error
    })
  }
};


module.exports = user;
