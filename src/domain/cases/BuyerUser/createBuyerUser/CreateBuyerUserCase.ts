import { BuyerUserDTO } from "../../../models/BuyerUser";
import { IBuyerUser } from "../../../repositories/BuyerUserRepo";

class CreateBuyerUserCase {
  constructor(private buyerUserRepo: IBuyerUser) {}

  async handle(data: BuyerUserDTO) {
    const userExists = await this.buyerUserRepo.readBuyerUser(data.userEmail);

    if (!userExists) {
      await this.buyerUserRepo.createBuyerUser(data);
    } else {
      throw new Error("This user already exists!");
    }
  }
}

export { CreateBuyerUserCase };
