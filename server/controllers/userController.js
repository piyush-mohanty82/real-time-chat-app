import { generateToken } from "../lib/utils.js";
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

        const newUser = await User.create({fullName,email,password: hashedPassword,bio});

        const token = generateToken(newUser._id);

        res.json({success: true,userData:newUser,token,message: "Account created successfully"});
    } catch (error) {
        console.log(error.message);
        res.json({success: false,message: error.message});
    }
}