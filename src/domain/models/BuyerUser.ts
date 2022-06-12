import { BaseUser, BaseUserDTO } from "./BaseUser";

class BuyerUser extends BaseUser{
    public cpf: string

    constructor(props: BuyerUser){
        super(props)
        Object.assign(this, props)
    }
}

class BuyerUserDTO extends BaseUserDTO {
    cpf: string
}

export { BuyerUser, BuyerUserDTO }