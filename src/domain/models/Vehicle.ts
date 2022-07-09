interface IVehicleDTO {
  placa: string
  modelo: string
  ano: string
  isPlacaValid?: boolean
  carro?: boolean
  moto?: boolean
  descricao?: string

}

class Vehicle {
  private props: IVehicleDTO

  public constructor(props: IVehicleDTO){
    //Falta condição para checar se carro e moto são true, mas como são ambos argumentos opcionais ficará para depois
    if (this.validatePlaca(props.placa)){
      this.props = {
        ...props,
        carro: props.carro || false,
        moto: props.moto || false,
        isPlacaValid: props.isPlacaValid || false,
        descricao: props.descricao || "Missing description"
      }
    }else{
      throw new Error("Your placa is invalid or/and outdated")
    }    
  }

  public get placa() {
    return this.props.placa
  }

  public get modelo() {
    return this.props.modelo
  }

  public get ano() {
    return this.props.ano
  }

  public get carro() {
    return this.props.carro
  }

  public get moto() {
    return this.props.moto
  }

  public get descricao() {
    return this.props.descricao
  }

  public get vehicle() {
    return this.props
  }
 
  public updatePlaca(newPlaca: string) {
    if (this.placa.toLocaleLowerCase() === newPlaca.toLocaleLowerCase()){
      throw new Error("You should inform a different placa")
    }else{
      this.props.placa = newPlaca
    }
    
  }

  public updateModelo(newModelo: string) {
    if (newModelo.toLocaleLowerCase() === this.modelo.toLocaleLowerCase()) {
      throw new Error("You need to supply a new modelo, not the same");
    } else {
      this.props.modelo = newModelo;
    }
  }

  private validatePlaca(placa: string): boolean {
    return /^\D{3}\d\D\d{2}/.test(placa)
  }
}

export { Vehicle, IVehicleDTO }