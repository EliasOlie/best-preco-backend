import { IBuyerUser } from "../../../repositories/BuyerUserRepo";

class ChangeBuyerUserEmailCase {
  constructor(
    private buyerUserRepo: IBuyerUser
  ){}

  async handle(email: string, newEmail: string){
    let userExists = await this.buyerUserRepo.readBuyerUser(email)
    if(userExists){
      this.buyerUserRepo.updateUserEmail(userExists, newEmail)
    }else{
      throw new Error("This user does not exists")
    }
  }
}

export { ChangeBuyerUserEmailCase }