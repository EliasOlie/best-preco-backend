import { ITransportUser } from "../../../repositories/TransportUserRepo";

class DeleteTransportUserCase {
  constructor(private transportUserRepo: ITransportUser) {}

  async handle(email: string){
    const userExists = await this.transportUserRepo.readTransportUser(email)

    if(!userExists) {
      throw new Error("This user does not exists")
    }else{
      await this.transportUserRepo.deleteTransportUser(email)
    }

  }
}

export { DeleteTransportUserCase }