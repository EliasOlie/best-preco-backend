import { IBuyerUserRepo } from "../../../repositories/BuyerUserRepo";

class ChangeBuyerUserPasswordCase {
  constructor(
    private buyerUserRepo: IBuyerUserRepo
  ){}

  async handle(email: string,newPassword: string){
    let user = await this.buyerUserRepo.readBuyerUser(email)
    if(user){
      user.updateUserPassword(newPassword)
    }else{
      throw new Error("This user does not exists")
    }
  }
}

export { ChangeBuyerUserPasswordCase }