interface IProductDTO {
  owner: string
  name: string
  branding: string
  price: number
  validDate: string
}

class Product {
  private props: IProductDTO
  
  constructor(props: IProductDTO) {
    this.props = props
  }

  public get owner() {
    return this.props.owner
  }

  public get name() {
    return this.props.name
  }

  public get branding() {
    return this.props.branding
  }

  public get price() {
    return this.props.price
  }

  public get validDate() {
    return this.props.validDate
  }

  public get Product() {
    return this.props
  }

  public updateName(newName: string) {
    if (newName !== this.name) {
      this.props.name = newName
    }else{
      throw new Error("You should supply a different name, not the same")
    }
  }
  
  public updateBranding(newBranding: string) {
    if(newBranding !== this.branding) {
      this.props.branding = newBranding
    }else{
      throw new Error("You should supply a different branding, not the same")
    }
  }

  public updatePrice(newPrice: number) {
    this.props.price = newPrice
  }

  public updateValidDate(newDate: string) {
    //Depois usar Regex para validar o formato das datas? Imagino que não é preciso, já que a data é gerada pelo sistema e não pelo usuário(diretamente)
    this.props.validDate = newDate
  }
}

export { Product, IProductDTO }