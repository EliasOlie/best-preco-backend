import { BuyerUser, BuyerUserDTO } from "./BuyerUser";
import { Vehicle, IVehicleDTO } from "./Vehicle";
interface TransportUserDTO extends BuyerUserDTO {
  cnh: string;
  vehicles?: Array<Vehicle>
}

class TransportUser extends BuyerUser {
  private transportUserProps: TransportUserDTO;

  public constructor(props: TransportUserDTO) {
    super(props);
    this.transportUserProps = {
      ...props,
      vehicles: []
    }
  }

  public get cnh() {
    return this.transportUserProps.cnh;
  }

  public get vehicles(){
    return this.transportUserProps.vehicles
  }

  public get User() {
    return this.transportUserProps
  }

  public updateCnh(newCnh: string) {
    if (newCnh.toLocaleLowerCase() === this.cnh.toLocaleLowerCase()) {
      throw new Error("You need to supply a new cnh, not the same");
    } else {
      this.transportUserProps.cnh = newCnh;
    }
  }

  public addVehicle(vehicleProps: IVehicleDTO) {
    try {
      this.transportUserProps.vehicles!.push(new Vehicle(vehicleProps))
    } catch (error) {
      throw error
    }
  }
}


export { TransportUser, TransportUserDTO };
