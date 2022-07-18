import { ITransportUser } from "../../../repositories/TransportUserRepo";

class ChangeTransportUserNameCase {
  constructor(private transportUserRepo: ITransportUser){}

  async handle(email: string, newName: string){
    const user = await this.transportUserRepo.readTransportUser(email)

    if(user){
      user.updateUserName(newName)
    }else{
      throw new Error("This user does not exists")
    }
  }
}

export { ChangeTransportUserNameCase }