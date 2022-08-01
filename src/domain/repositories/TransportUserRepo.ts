import { TransportUser, TransportUserDTO, ITransportUserDTO } from "../models/TransportUser"
import { Vehicle } from "../models/Vehicle"

interface ITransportUser {
  createTransportUser(tUser: TransportUserDTO): Promise<void>
  readTransportUser(email: string): Promise<ITransportUserDTO | null>
  getAll(): Promise<Array<TransportUserDTO>>
  deleteTransportUser(email: string): Promise<void>
  updateTransportUserName(user: ITransportUserDTO, newName: string): Promise<void>
  updateTransportUserEmail(user: ITransportUserDTO, newEmail: string): Promise<void>
  updateTransportUserPassword(user: ITransportUserDTO, newPassword: string): Promise<void>
  updateTransportUserCNH(user: ITransportUserDTO, newCNH: string): Promise<void>
  addVehicleToTransportUser(user: ITransportUserDTO, vehicle: Vehicle): Promise<void>
}

export { ITransportUser }