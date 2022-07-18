import { TransportUserDTO } from "../../../models/TransportUser";
import { ITransportUser } from "../../../repositories/TransportUserRepo";

class CreateTransportUserCase {
  constructor(private transportUserRepo: ITransportUser){}

  async handle(data: TransportUserDTO) {
    const userExists = await this.transportUserRepo.readTransportUser(data.userEmail)
    if(!userExists){
      await this.transportUserRepo.createTransportUser(data)
    }else{
      throw new Error("This user already exists!")
    }
  }
}

export { CreateTransportUserCase }