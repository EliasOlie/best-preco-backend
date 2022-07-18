import { TransportUserDTO, TransportUser } from "../../../domain/models/TransportUser";
import { Vehicle } from "../../../domain/models/Vehicle";
import { ITransportUser } from "../../../domain/repositories/TransportUserRepo";

let inMemoryDB: Array<TransportUser> = []

class InMemoryTransportUserImplementation implements ITransportUser {
  
  async createTransportUser(payload: TransportUserDTO): Promise<void> {
    inMemoryDB.push(new TransportUser(payload))
  }

  async readTransportUser(email: string): Promise<TransportUser> {
    let user = inMemoryDB.filter((user: TransportUser) => (user.userEmail === email))[0]
    return user
  }

  async getAll(): Promise<TransportUser[]> {
    return inMemoryDB
  }

  async deleteTransportUser(email: string): Promise<void> {
    inMemoryDB = inMemoryDB.filter((user: TransportUser) => user.userEmail !== email)
  }

  async updateTransportUserCNH(user: TransportUser, newCNH: string): Promise<void> {
    user.updateCnh(newCNH)
    let modificationAt = new Date(Date.now());
    user.updateModifiedAt(modificationAt.toLocaleDateString())
  }

  async updateTransportUserEmail(user: TransportUser, newEmail: string): Promise<void> {
    user.updateUserEmail(newEmail)
    let modificationAt = new Date(Date.now());
    user.updateModifiedAt(modificationAt.toLocaleDateString())
  }

  async updateTransportUserName(user: TransportUser, newName: string): Promise<void> {
    user.updateUserName(newName)
    let modificationAt = new Date(Date.now());
    user.updateModifiedAt(modificationAt.toLocaleDateString())
  }

  async updateTransportUserPassword(user: TransportUser, newPassword: string): Promise<void> {
    user.updateUserPassword(newPassword)
    let modificationAt = new Date(Date.now());
    user.updateModifiedAt(modificationAt.toLocaleDateString())
  }

  async addVehicleToTransportUser(user: TransportUser, vehicle: Vehicle): Promise<void> {
    user.addVehicle(vehicle)
    let modificationAt = new Date(Date.now());
    user.updateModifiedAt(modificationAt.toLocaleDateString())
  }
}

export { InMemoryTransportUserImplementation }