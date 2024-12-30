interface IAuth {
    signUp(data: {fullName:string, email:string, password:string,profilePicture:string}): Promise<void>,
    // signIn(data: {email:string, password:string}): Promise<void>,
}

export default IAuth;