import User from "../models/user.js";
import bcrypt from "bcrypt";

// Signup a new user
export const signup = async (req,res) => {
    const {fullName,email,password} = req.body;

    try {
        if(!fullName || !email || !password || !bio){
            return res.json({sucess: false, message: "Missing Details"});
        }
        const user = await User.findOne({email});

        if(user){
            return res.json({sucess: false,message: "Account already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
    } catch (error) {
        
    }
}