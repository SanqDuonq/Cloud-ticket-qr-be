interface IUser extends ISecurity {
    email: string,
    fullName: string,
    password: string,
    profilePicture: string,
}

interface ISecurity {
    isVerify: boolean,
    verifyOTP: string,
    verifyOTPExpiredAt: Date,
    resetOTP: string,
    resetOTPExpiredAt: Date
}

export default IUser;