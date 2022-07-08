import { ISellerUser } from "../../../repositories/SellerUserRepo";

class DeleteSellerUserCase {
  constructor(private sellerUserRepo: ISellerUser){}

  async handle(email: string) {
    const userExists = await this.sellerUserRepo.getSellerUser(email)
    if(!userExists) {
      throw new Error("This user does not exists")
    }else{
      await this.sellerUserRepo.deleteSellerUser(email)
    }
  }
}

export { DeleteSellerUserCase }