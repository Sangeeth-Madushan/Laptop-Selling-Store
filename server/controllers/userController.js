import User from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config();

export function getUser(req, res) {
    User.find().then((data)=>{
        res.json(data);

    }).catch(() => {
      res.json({
        message: "users not found",
      });
    });
}

export function saveUser(req, res) {
  const { email, firstName, lastName, password, role } = req.body;

  // Validate required fields
  if (!email || !firstName || !lastName || !password ) {
    return res.status(400).json({
      message: "Missing required fields",
    });
  }

  // If trying to create an 'admin' account:
  if (role === "admin") {
    // Check if user is logged in and is an admin
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({
        message:
          "You are not authorized to create an admin account. Please login as an admin.",
      });
    }
  }

// If the user is logged in and is an admin, continue with the task...

  const hashedPassword = bcrypt.hashSync(req.body.password, 10);

  const user = new User({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: hashedPassword,
    role: req.body.role,

  });

  user.save().then(()=>{
    res.json({
        message: "user saved successfull"
    })
  }).catch(()=>{
    res.json({
        messsage: "user added failed",
    })
  })
}

export function loginUser(req,res){

    const email = req.body.email;
    const password = req.body.password;

    User.findOne( {email :email}).then(
        (user)=>{
            if (user == null) {
        // User not found → 404
        return res.status(404).json({
          message: "User not found",
        });
            }else{
                
                //test commit
                //password entered by the user (password) matches the saved (hashed) password in the database (user.password).
                const isPasswordCorrect = bcrypt.compareSync(password, user.password);

                if(isPasswordCorrect){

                    const token = jwt.sign({
                        email : user.email,
                        firstName: user.firstName,
                        lastName : user.lastName,
                        role : user.role,
                        img : user.img
                    },
                    process.env.JWT_KEY
                ) 

                res.status(200).json({
                    message:"passsword is correct you have access",
                    token: token,
                    role : user.role

                })



                }else{
                    res.status(401).json({
                        message : "invalid password"
                    })
                }
            }
        }



    ).catch(()=>{
        res.status(500).json({message: "something went wrong "})
    })


}


// short code for checking user is admin or not
export function isAdmin(req){

   // check user imfor missing or user is not login
  if (req.user == null) {
    
    return false; // stop here
  }

    // check user is not a admin 
  if (req.user.role != "admin") {
    
    return false; // stop here too
  }

  return true

}