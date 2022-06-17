import { BaseUser, BaseUserDTO } from "./BaseUser";

class BuyerUser extends BaseUser{
    private cpf: string

    constructor(props: BuyerUserDTO){
        super(props)
        Object.assign(this, props)
    }

    public get getCpf(){
        return this.cpf
    }
    //CPF Wont change
}

class BuyerUserDTO extends BaseUserDTO {
    cpf: string
}

export { BuyerUser, BuyerUserDTO }