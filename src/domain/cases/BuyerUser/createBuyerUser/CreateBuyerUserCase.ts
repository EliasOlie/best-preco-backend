import { BuyerUserDTO } from "../../../models/BuyerUser";
import { IBuyerUserRepo } from "../../../repositories/BuyerUserRepo";

class CreateBuyerUserCase {
  constructor(private buyerUserRepo: IBuyerUserRepo) {}

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
