import { IBuyerUser } from "../../../repositories/BuyerUserRepo";

class ChangeBuyerUserPasswordCase {
  constructor(
    private buyerUserRepo: IBuyerUser
  ){}

  async handle(email: string,newPassword: string){
    let user = await this.buyerUserRepo.readBuyerUser(email)
    if(user){
      this.buyerUserRepo.updateUserPassword(user, newPassword)
    }else{
      throw new Error("This user does not exists")
    }
  }
}

export { ChangeBuyerUserPasswordCase }