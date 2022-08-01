import { ISellerUser } from "../../../repositories/SellerUserRepo";

class ChangeSellerUserEmailCase {
  constructor(private sellerUserRepo: ISellerUser){}

  async handle(email: string, newEmail: string){
    const User = await this.sellerUserRepo.readSellerUser(email)
    if(!User){
      throw new Error("This user does not exists")
    }else{
      this.sellerUserRepo.updateUserEmail(User, newEmail)
    }
  }
}

export { ChangeSellerUserEmailCase }