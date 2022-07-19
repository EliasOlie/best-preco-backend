import { ITransportUser } from "../../../repositories/TransportUserRepo";

class GetAllCase {
  constructor(private transportUserCase: ITransportUser){}
  async handle(){
    const users = await this.transportUserCase.getAll()

    return users
  }
}

export { GetAllCase }