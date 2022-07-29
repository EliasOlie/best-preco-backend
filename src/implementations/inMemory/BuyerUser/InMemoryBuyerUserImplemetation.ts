import { BuyerUser, BuyerUserDTO } from "../../../domain/models/BuyerUser";
import { IBuyerUserRepo } from "../../../domain/repositories/BuyerUserRepo";

let inMemoryDB: Array<BuyerUser> = [];

class InMemoryBuyerUserImplementation implements IBuyerUserRepo {
  async createBuyerUser(bUser: BuyerUserDTO): Promise<void> {
    inMemoryDB.push(new BuyerUser(bUser));
  }

  async readBuyerUser(email: string): Promise<BuyerUser | null> {
    return inMemoryDB.filter((user: BuyerUser) => user.userEmail === email)[0] as BuyerUser;
  }

  async deleteBuyerUser(email: string): Promise<void> {
    inMemoryDB = inMemoryDB.filter((user: BuyerUser) => user.userEmail !== email);
  }

  async getAll(): Promise<BuyerUser[]> {
    return inMemoryDB;
  }

  async updateUserName(user: BuyerUser, newName: string): Promise<void> {
    user.updateUserName(newName);
    let modificationAt = new Date(Date.now());
    user.updateModifiedAt(modificationAt.toLocaleDateString());
  }

  async updateUserEmail(user: BuyerUser, newEmail: string): Promise<void> {
    user.updateUserEmail(newEmail);
    let modificationAt = new Date(Date.now());
    user.updateModifiedAt(modificationAt.toLocaleDateString());
  }

  async updateUserPassword(
    user: BuyerUser,
    newPassword: string
  ): Promise<void> {
    user.updateUserPassword(newPassword);
    let modificationAt = new Date(Date.now());
    user.updateModifiedAt(modificationAt.toLocaleDateString());
  }
}

export { InMemoryBuyerUserImplementation };
