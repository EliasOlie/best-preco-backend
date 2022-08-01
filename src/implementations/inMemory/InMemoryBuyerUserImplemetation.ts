import { BuyerUser, BuyerUserDTO, IBuyerUserDTO } from "../../domain/models/BuyerUser";
import { IBuyerUser } from "../../domain/repositories/BuyerUserRepo";

let inMemoryDB: Array<BuyerUser> = [];

class InMemoryBuyerUserImplementation implements IBuyerUser {
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

  async updateUserName(user: IBuyerUserDTO, newName: string): Promise<void> {
    let nUser = new BuyerUser(user.props)
    nUser.updateUserName(newName);
    let modificationAt = new Date(Date.now());
    nUser.updateModifiedAt(modificationAt.toLocaleDateString());
  }

  async updateUserEmail(user: IBuyerUserDTO, newEmail: string): Promise<void> {
    user.updateUserEmail(newEmail);
    let modificationAt = new Date(Date.now());
    user.updateModifiedAt(modificationAt.toLocaleDateString());
  }

  async updateUserPassword(
    user: IBuyerUserDTO,
    newPassword: string
  ): Promise<void> {
    user.updateUserPassword(newPassword);
    let modificationAt = new Date(Date.now());
    user.updateModifiedAt(modificationAt.toLocaleDateString());
  }
}

export { InMemoryBuyerUserImplementation };
