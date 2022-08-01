import { IBuyerUser } from "../../../repositories/BuyerUserRepo";

class ChangeBuyerUserNameCase {
  constructor(private buyerUserRepo: IBuyerUser) {}

  async handle(email: string, newName: string) {
    let user = await this.buyerUserRepo.readBuyerUser(email);
    if (user) {
      this.buyerUserRepo.updateUserName(user, newName);
    } else {
      throw new Error("This user does not exists!");
    }
  }
}

export { ChangeBuyerUserNameCase };
