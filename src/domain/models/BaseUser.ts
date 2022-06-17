class BaseUser {
    // its properties should be private and accessible by getters
    private readonly id: string
    private userName: string
    private userEmail: string
    private userPassword: string
    private createdAt: string
    private modifiedAt: string

    public constructor(props: BaseUserDTO){
        Object.assign(this, props)
    }

    public get getId(){
        return this.id
    }

    public get getUserName(){
        return this.userName
    }

    public updateUserName(newName: string){
        try {
            if (this.userName.toLocaleLowerCase() !== newName.toLocaleLowerCase()){
                this.userName = newName
            }else{
                throw new Error("You need to supply a new name, not the same")
            }
        } catch (error) {
            if (error instanceof Error){
                console.log(error.message)
            }else{
                console.log("Unexpected error occurred")
            }
        }
    }

    public get getUserEmail(){
        return this.userEmail
    }

    public updateUserEmail(newEmail: string){
        try {
            if (this.userEmail.toLocaleLowerCase() !== newEmail.toLocaleLowerCase()){
                this.userEmail = newEmail
            }else{
                throw new Error("You need to supply a new email, not the same")
            }
        } catch (error) {
            if (error instanceof Error){
                console.log(error.message)
            }else{
                console.log("Unexpected error occurred")
            }
        }
    }

    public get getUserPassword(){
        return this.userPassword
    }

    public updateUserPassword(newPassword: string){
        try {
            if (this.userPassword.toLocaleLowerCase() !== newPassword.toLocaleLowerCase()){
                this.userPassword = newPassword
            }else{
                throw new Error("You need to supply a new password, not the same")
            }
        } catch (error) {
            if (error instanceof Error){
                console.log(error.message)
            }else{
                console.log("Unexpected error occurred")
            }
        }
    }

    public get getUserCreatedAt(){
        return this.createdAt
    }

    public get getUserModifiedAt(){
        return this.modifiedAt
    }

    public updateModifiedAt(newDate: string){
        try {
            this.modifiedAt = newDate
        } catch (error) {
            if (error instanceof Error){
                console.log(error.message)
            }else{
                console.log("Unexpected error occurred")
            }
        }
    }
}

class BaseUserDTO {
    id: string
    userName: string
    userEmail: string
    userPassword: string
    createdAt: Date
    modifiedAt: Date
}

export {BaseUser, BaseUserDTO}