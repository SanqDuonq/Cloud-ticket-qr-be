import mongoose, { Schema } from "mongoose";
import IUser from "../interface/user.interface";

const UserSchema:Schema<IUser> = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: null
    },
    isVerify: {
        type: Boolean,
        default: false
    },
    verifyOTP: {
        type: String,
        default: null
    },
    verifyOTPExpiredAt: {
        type: Date,
    },
    resetOTP: {
        type: String,
        default: null
    },
    resetOTPExpiredAt: {
        type: Date,
    }
}, {
    timestamps: true
})

const User = mongoose.model('User',UserSchema);
export default User;