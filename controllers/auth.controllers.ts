import {Request,Response} from 'express'
import authServices from "../services/auth.services";
import catchError from '../utils/catch-error';

class AuthController {
    async signUp(req: Request,res: Response){
        try {
            const {email,fullName,password,profilePicture} = req.body;
            await authServices.signUp({email,fullName,password,profilePicture});
            res.status(201).json({
                message: 'User created successful!'
            })
        } catch (error) {
            catchError(res,error);
        }
    }
}

const authController = new AuthController();
export default authController;