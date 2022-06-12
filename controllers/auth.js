
const pool=require('../database/keys');
const authentication = {};

authentication.signUp = async (req, res) => {
  const { name, email, password, role } = req.body;
  if (role == "admin") {
    try {
      await pool.query(
        "INSERT INTO admins (user_name, email, password) VALUES ($1, $2, $3)",
        [name, email, password]
      );
      res.status(200).json({
        message: "Successful registred admin",
        admin: { name, email, password },
      });
    } catch (error) {
      if (error.constraint == "admin_p_email_key") {
        res.status(500).json({
          message: "Someone is already using that email",
          error,
        });
      } else {
        res.status(500).json({
          message: "An error has ocurred",
          error,
        });
      }
    }
  } else {
    try {
      await pool.query(
        "INSERT INTO users (first_name,last_name,email,type) VALUES ($1, $2, $3,$4)",
        [firt_name, last_name,email, type]
      );
      res.status(200).json({
        message: "Successful registred users",
        users: { firt_name,last_name, email, type },
      });
    } catch (error) {
      if (error.constraint == "user_email_key") {
        res.status(500).json({
          message: "Someone is already using that email",
          error,
        });
      } else {
        res.status(500).json({
          message: "An error has ocurred",
          error,
        });
      }
    }
  }
};

authentication.signIn = async (req, res) => {
  const { email, password, role } = req.body;
  if (role == "admin") {
    try {
      const admin = await (
        await pool.query(
          "SELECT * FROM admins WHERE email=$1 AND password=$2",
          [email, password]
        )
      ).rows;
      if (admin.length > 0) {
        res.status(200).json({
          id: admin[0].id,
          name: admin[0].user_name,
          email: admin[0].email,
          role: "admin",
        });
      } else {
        res.status(200).json({
          message: "The admin does not exist",
          NotFound: true,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "An error has ocured",
        error,
      });
    }
  } else {
    try {
      const student = await (
        await pool.query(
          "SELECT * FROM student WHERE s_email=$1 AND s_password=$2",
          [email, password]
        )
      ).rows;
      if (student.length > 0) {
        res.status(200).json({
          id: student[0].id_s,
          name: student[0].s_name,
          email: student[0].s_email,
          role: "student",
        });
      } else {
        res.status(200).json({
          message: "The student does not exist",
          NotFound: true,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "An error has ocured",
        error,
      });
    }
  }
};

module.exports = authentication;
