import { ITransportUser } from "../../../repositories/TransportUserRepo";

class ChangeTransportUserEmailCase {
  constructor(private transportUserRepo: ITransportUser) {}

  async handle(email: string, newEmail: string) {
    const user = await this.transportUserRepo.readTransportUser(email)

    if(user){
      user.updateUserEmail(newEmail)
    }else{
      throw new Error("This user does not exists")
    }
  }
}

export { ChangeTransportUserEmailCase }

