class BaseUser {
    private id: string
    private userName: string
    private userEmail: string
    private userPassword: string
    private createdAt: Date
    private modifiedAt: Date

    public constructor(props: BaseUser){
        Object.assign(this, props)
    }
}

export {BaseUser}