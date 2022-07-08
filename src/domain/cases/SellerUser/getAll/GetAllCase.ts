import { ISellerUser } from "../../../repositories/SellerUserRepo";

class GetAllCase {
  constructor(private sellerUserRepo: ISellerUser){}
  
  async handle(){
    return await this.sellerUserRepo.getAll()
  }
}

export { GetAllCase }