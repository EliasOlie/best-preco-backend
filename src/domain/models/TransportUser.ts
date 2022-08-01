import { BuyerUser, BuyerUserDTO } from "./BuyerUser";
import { Vehicle, IVehicleDTO } from "./Vehicle";
interface TransportUserDTO extends BuyerUserDTO {
  cnh: string;
  vehicles?: Array<Vehicle>
}

interface ITransportUserDTO {
  props: TransportUserDTO
}

class TransportUser extends BuyerUser {
  protected props: TransportUserDTO;

  public constructor(props: TransportUserDTO) {
    super(props);
    this.props = {
      ...props,
      vehicles: []
    }
  }

  public get cnh() {
    return this.props.cnh;
  }

  public get vehicles(){
    return this.props.vehicles
  }

  public get User() {
    return this.props
  }

  public updateCnh(newCnh: string) {
    if (newCnh.toLocaleLowerCase() === this.cnh.toLocaleLowerCase()) {
      throw new Error("You need to supply a new cnh, not the same");
    } else {
      this.props.cnh = newCnh;
    }
  }

  public addVehicle(vehicleProps: IVehicleDTO) {
    try {
      this.props.vehicles!.push(new Vehicle(vehicleProps))
    } catch (error) {
      throw error
    }
  }
}


export { TransportUser, TransportUserDTO, ITransportUserDTO };
