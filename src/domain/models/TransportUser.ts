import { BuyerUser, BuyerUserDTO } from "./BuyerUser"

class TransportUser extends BuyerUser {
    private cnh: string
    private placa: string
    private modelo: string
    private isValidPlaca: boolean = false

    public constructor(props: TransportUserDTO){
        super(props)
        Object.assign(this, props)
    }

    public get getCnh() {
        return this.cnh
    }

    public updateCnh(newCnh: string) {
        if(newCnh.toLocaleLowerCase() === this.cnh.toLocaleLowerCase()){
            throw new Error("You need to supply a new cnh, not the same")
        }else{
            this.cnh = newCnh
        }
    }

    public get getPlaca() {
        return this.placa
    }

    public updatePlaca(newPlaca: string) {
        if(newPlaca.toLocaleLowerCase() === this.placa.toLocaleLowerCase()){
            throw new Error("You need to supply a new placa, not the same")
        }else{
            this.placa = newPlaca
        }
    }

    public get getModelo() {
        return this.modelo
    }

    public updateModelo(newModelo: string) {
        if(newModelo.toLocaleLowerCase() === this.modelo.toLocaleLowerCase()){
            throw new Error("You need to supply a new modelo, not the same")
        }else{
            this.modelo = newModelo
        }

    }

    public get getIsValidPlaca() {
        return this.isValidPlaca
    }

    public updateIsValidPlaca(){
        this.isValidPlaca = !this.isValidPlaca
    }
}

interface TransportUserDTO extends BuyerUserDTO{
    cnh: string
    placa: string
    modelo: string
    isValidPlaca?: boolean
}

export { TransportUser }