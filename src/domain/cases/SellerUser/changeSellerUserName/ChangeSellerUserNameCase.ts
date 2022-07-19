import { ISellerUser } from "../../../repositories/SellerUserRepo";

class ChangeSellerUserNameCase {
  constructor(private sellerUserRepo: ISellerUser){}

  async handle(email: string, newName: string){
    const User = await this.sellerUserRepo.readSellerUser(email)

    if(!User) {
      throw new Error("This User does not exists")
    }else{
      User.updateUserName(newName)
    }
  }
}

export { ChangeSellerUserNameCase }