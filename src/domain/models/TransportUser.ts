import { BaseUser } from "./BaseUser";

class TransportUser extends BaseUser {
    private cnh: string
    private placa: string
    private modelo: string

    public constructor(props: TransportUser){
        super(props)
        Object.assign(this, props)
    }
}

export { TransportUser }