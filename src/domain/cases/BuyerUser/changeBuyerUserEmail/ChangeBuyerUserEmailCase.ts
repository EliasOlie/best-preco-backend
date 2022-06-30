import { IBuyerUserRepo } from "../../../repositories/BuyerUserRepo";

class ChangeBuyerUserEmailCase {
  constructor(
    private buyerUserRepo: IBuyerUserRepo
  ){}

  async handle(email: string, newEmail: string){
    const userExists = await this.buyerUserRepo.readBuyerUser(email)
    if(userExists){
      userExists.updateUserEmail(newEmail)
    }else{
      throw new Error("This user does not exists")
    }
  }
}

export { ChangeBuyerUserEmailCase }