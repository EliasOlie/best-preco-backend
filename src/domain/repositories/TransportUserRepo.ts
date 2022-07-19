import { TransportUser, TransportUserDTO } from "../models/TransportUser"
import { Vehicle } from "../models/Vehicle"

interface ITransportUser {
  createTransportUser(payload: TransportUserDTO): Promise<void>
  readTransportUser(email: string): Promise<TransportUser>
  getAll(): Promise<Array<TransportUser>>
  deleteTransportUser(email: string): Promise<void>
  updateTransportUserName(user: TransportUser, newName: string): Promise<void>
  updateTransportUserEmail(user: TransportUser, newEmail: string): Promise<void>
  updateTransportUserPassword(user: TransportUser, newPassword: string): Promise<void>
  updateTransportUserCNH(user: TransportUser, newCNH: string): Promise<void>
  addVehicleToTransportUser(user: TransportUser, vehicle: Vehicle): Promise<void>
}

export { ITransportUser }