import { BaseUser } from "./BaseUser";

class SellerUser extends BaseUser {
    private cnpj: string

    public constructor(props: SellerUser){
        super(props)
        Object.assign(this, props)
    }
}

export { SellerUser }