import { IBuyerUserRepo } from "../../../repositories/BuyerUserRepo";

class ChangeBuyerUserNameCase {
  constructor(private buyerUserRepo: IBuyerUserRepo) {}

  async handle(email: string, newName: string) {
    let user = await this.buyerUserRepo.readBuyerUser(email);
    if (user) {
      await this.buyerUserRepo.updateUserName(user, newName);
    } else {
      throw new Error("This user does not exists!");
    }
  }
}

export { ChangeBuyerUserNameCase };
