import { BuyerUser, BuyerUserDTO } from "./BuyerUser";

class TransportUser extends BuyerUser {
  private cnh: string;
  private placa: string;
  private modelo: string;
  private isValidPlaca: boolean = false;

  public constructor(props: TransportUserDTO) {
    super(props);
    if (this.validatePlaca(props.placa)){
        Object.assign(this, props);
    }else{
        throw new Error("Your placa is invalid or/and outdated")
    }
  }

  public get getCnh() {
    return this.cnh;
  }

  public updateCnh(newCnh: string) {
    if (newCnh.toLocaleLowerCase() === this.cnh.toLocaleLowerCase()) {
      throw new Error("You need to supply a new cnh, not the same");
    } else {
      this.cnh = newCnh;
    }
  }

  public get getPlaca() {
    return this.placa;
  }

  //Update unverified placa no caso do usuário digitar errado

  public updatePlaca(newPlaca: string) {
    if(this.isValidPlaca){
        if (newPlaca.toLocaleLowerCase() === this.getPlaca.toLocaleLowerCase()){
            throw new Error("You need to inform a different placa")
        }else{
            if (this.validatePlaca(newPlaca)){
                this.placa = newPlaca
            }else{
                throw new Error("Your placa is inválid or outdated")
            }
        }
    }else{
        throw new Error("You need a verified placa to be able to change your placa")
    }
  }

  public get getModelo() {
    return this.modelo;
  }

  public updateModelo(newModelo: string) {
    if (newModelo.toLocaleLowerCase() === this.modelo.toLocaleLowerCase()) {
      throw new Error("You need to supply a new modelo, not the same");
    } else {
      this.modelo = newModelo;
    }
  }

  public get getIsValidPlaca() {
    return this.isValidPlaca;
  }

  public updateIsValidPlaca() {
    this.isValidPlaca = !this.isValidPlaca;
  }

  private validatePlaca(placa: string): boolean {
    return /^\D{3}\d\D\d{2}/.test(placa)
  }
}

interface TransportUserDTO extends BuyerUserDTO {
  cnh: string;
  placa: string;
  modelo: string;
  isValidPlaca?: boolean;
}

export { TransportUser, TransportUserDTO };
