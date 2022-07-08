import { ISellerUser } from "../../../repositories/SellerUserRepo";

class ChangeSellerUserPasswordCase {
  constructor(private sellerUserRepo: ISellerUser){}

  async handle(email: string, newPassword: string) {
    const User = await this.sellerUserRepo.getSellerUser(email)

    if(!User){
      throw new Error("This user does not exists")
    }else{
      User.updateUserPassword(newPassword)
    }
  }
}

export { ChangeSellerUserPasswordCase }