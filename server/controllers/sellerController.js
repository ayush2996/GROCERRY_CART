import jwt from 'jsonwebtoken';
import User from '../models/user.js';


//LOGIN seller :  /api/seller/login


export const sellerLogin = async (req,res) =>{

    try {
        
   
    const {email,password} =req.body;

    if(!email || !password){
          return res.json({success:false , message: "email and password are required"});
    }

    if(process.env.SELLER_PASSWORD===password && process.env.SELLER_EMAIL===email){
        const token =jwt.sign({email},process.env.JWT_SECRET,{expiresIn: '7d'});
         res.cookie('sellerToken',token,{
            httpOnly: true, //prevent js to access the cookie
            secure: process.env.NODE_ENV ==='production', //use secure cookie in production
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', //csrf protection
            maxAge :7*24 *60 *60 *1000,
        });
        return res.json({success:true , message:"Logged In"})
    }else{
        return res.json({success:false , message:"Invalid Credentials"})
    }
     } catch (error) {
        console.log(error.message);
        return res.json({success:false , message: error.message})
    }

}

//Seller isAuth : /api/seller/is-auth
export const isSellerAuth = async (req, res) => {
    try {
        return res.json({ success: true });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}



//Seller Logout : /seller/api/logout

export const sellerLogout = async (req,res)=>{
    try {
        res.clearCookie('sellerToken',{
            httpOnly: true,
            secure: process.env.NODE_ENV ==='production', //use secure cookie in production
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', //csrf protection
        });

        return res.json({success:true , message:"LogOut"})
        
    } catch (error) {
         console.log(error.message);
        res.json({success:false, message:error.message});

    }
}