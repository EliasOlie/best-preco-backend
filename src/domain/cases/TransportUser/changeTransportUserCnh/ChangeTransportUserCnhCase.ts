import { ITransportUser } from "../../../repositories/TransportUserRepo";

class ChangeTransportUserCnhCase {
  constructor(private transportUserRepo: ITransportUser) {}

  async handle(email: string, newCnh: string) {
    const user = await this.transportUserRepo.readTransportUser(email)

    if(user){
      user.updateCnh(newCnh)
    }else{
      throw new Error("This user does not exists")
    }
  } 
}

export { ChangeTransportUserCnhCase }