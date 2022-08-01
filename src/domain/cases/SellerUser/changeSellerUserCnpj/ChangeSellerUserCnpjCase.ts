import { ISellerUser } from "../../../repositories/SellerUserRepo";

class ChangeSellerUserCnpjCase {
  constructor(private sellerUserRepo: ISellerUser){}

  async handle(email: string, newCnpj: string) {
    const User = await this.sellerUserRepo.readSellerUser(email)
    if (!User) {
      throw new Error("This user does not exists")
    }else{
      this.sellerUserRepo.updateUserCnpj(User,newCnpj)
    }
  }
}

export { ChangeSellerUserCnpjCase }