import { ITransportUser } from "../../../repositories/TransportUserRepo";

class ChangeTransportUserPasswordCase {
  constructor(private transportUserRepo: ITransportUser){}

  async handle(email: string, newPassword: string) {
    const user = await this.transportUserRepo.readTransportUser(email)

    if(user){
      this.transportUserRepo.updateTransportUserPassword(user, newPassword)
    }else{
      throw new Error("This user does not exists")
    }
  }
}

export { ChangeTransportUserPasswordCase }