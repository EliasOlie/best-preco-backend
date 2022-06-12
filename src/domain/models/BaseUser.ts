class BaseUser {
    public readonly id: string
    public userName: string
    public userEmail: string
    public userPassword: string
    public createdAt: Date
    public modifiedAt: Date

    public constructor(props: BaseUser){
        Object.assign(this, props)
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