import { ISellerUser } from "../../../repositories/SellerUserRepo";

class ChangeSellerUserPasswordCase {
  constructor(private sellerUserRepo: ISellerUser){}

  async handle(email: string, newPassword: string) {
    const User = await this.sellerUserRepo.readSellerUser(email)

    if(!User){
      throw new Error("This user does not exists")
    }else{
      this.sellerUserRepo.updateUserPassword(User,newPassword)
    }
  }
}

export { ChangeSellerUserPasswordCase }