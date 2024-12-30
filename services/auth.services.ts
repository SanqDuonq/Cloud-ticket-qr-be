import IAuth from "../interface/auth.interface";
import User from "../models/user.model";
import createError from 'http-errors';

export class AuthServices implements IAuth {
    // async signIn(data: { email: string; password: string; }): Promise<void> {
    //     const user = await User.findOne({email: data.email});
    //     if (!user) {
    //         throw createError(404,'Email not exists');
    //     }

    // }
    async signUp(data: { fullName: string; email: string; password: string; profilePicture: string; }): Promise<void> {
        const user = await User.findOne({email: data.email});
        if (user) {
            throw createError(409,'Email is exists')
        }
        const newUser = new User({
            email: data.email,
            fullName: data.fullName,
            password: data.password,
            profilePicture: data.profilePicture
        })
        await newUser.save();
    }
}

const authServices = new AuthServices();
export default authServices;