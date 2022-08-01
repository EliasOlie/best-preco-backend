import { TransportUserDTO } from "../../../models/TransportUser";
import { Vehicle } from "../../../models/Vehicle";
import { ITransportUser } from "../../../repositories/TransportUserRepo";

class AddVehicleCase {
  constructor(private useRepo: ITransportUser){}

  async handle(email: string, vehicle: Vehicle) {
    const userExists = await this.useRepo.readTransportUser(email)

    if(userExists){
      this.useRepo.addVehicleToTransportUser(userExists, vehicle)
    }else{
      throw new Error("This user does not exists")
    }

  }
}

export { AddVehicleCase }