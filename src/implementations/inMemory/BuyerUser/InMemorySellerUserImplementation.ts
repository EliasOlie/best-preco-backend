import { SellerUserDTO, SellerUser } from "../../../domain/models/SellerUser";
import { ISellerUser } from "../../../domain/repositories/SellerUserRepo";

let inMemoryDB:Array<SellerUser> = []

class InMemorytSellerUserImplementation implements ISellerUser {
  async createSellerUser(sUser: SellerUserDTO): Promise<void> {
    inMemoryDB.push(new SellerUser(sUser))
  }

  async getSellerUser(email: string): Promise<SellerUser | null> {
    return inMemoryDB.filter((user: SellerUser) => user.userEmail === email)[0]
  }

  async getAll(): Promise<SellerUser[]> {
    return inMemoryDB
  }

  async deleteSellerUser(email: string): Promise<void> {
    inMemoryDB = inMemoryDB.filter((user: SellerUser) => user.userEmail !== email);
  }

  async updateUserCnpj(user: SellerUser, newCnpj: string): Promise<void> {
    user.updateCnpj(newCnpj)
    let modificationAt = new Date(Date.now());
    user.updateModifiedAt(modificationAt.toLocaleDateString())
  }

  async updateUserEmail(user: SellerUser, newEmail: string): Promise<void> {
    user.updateUserEmail(newEmail)
    let modificationAt = new Date(Date.now());
    user.updateModifiedAt(modificationAt.toLocaleDateString())
  }

  async updateUserName(user: SellerUser, newName: string): Promise<void> {
    user.updateUserName(newName)
    let modificationAt = new Date(Date.now());
    user.updateModifiedAt(modificationAt.toLocaleDateString())
  }

  async updateUserPassword(user: SellerUser, newPassword: string): Promise<void> {
    user.updateUserPassword(newPassword)
    let modificationAt = new Date(Date.now());
    user.updateModifiedAt(modificationAt.toLocaleDateString())
  }

}

export { InMemorytSellerUserImplementation }