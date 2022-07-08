import { ISellerUser } from "../../../repositories/SellerUserRepo";
import { SellerUserDTO } from "../../../models/SellerUser";

class CreateSellerUserCase {
  constructor(private sellerUserRepo: ISellerUser) {}

  async handle(data: SellerUserDTO) {
    const userExists = await this.sellerUserRepo.getSellerUser(data.userEmail);
    if (!userExists) {
      await this.sellerUserRepo.createSellerUser(data);
    } else {
      throw new Error("This user already exists!");
    }
  }
}

export { CreateSellerUserCase };
