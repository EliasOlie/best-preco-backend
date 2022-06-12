import { BaseUser } from "./BaseUser";

class BuyerUser extends BaseUser{
    private cpf: string

    constructor(props: BuyerUser){
        super(props)
        Object.assign(this, props)
    }
}

export { BuyerUser }