import { ISellerUser } from "../../../repositories/SellerUserRepo";

class ReadSellerUserCase {
  constructor(private sellerUserRepo: ISellerUser){}

  async handle(email: string){
    const user = await this.sellerUserRepo.getSellerUser(email)

    if (!user) {
      throw new Error("This user does not exists")
    }else {
      return user
    }
  }
}

export { ReadSellerUserCase }