import { SellerUser, SellerUserDTO, ISellerUserDTO } from "../models/SellerUser";

interface ISellerUser {
  createSellerUser(sUser: SellerUserDTO): Promise<void>;
  readSellerUser(email: string): Promise<SellerUser | null>;
  deleteSellerUser(email: string): Promise<void>;
  getAll(): Promise<Array<SellerUser>>;
  updateUserCnpj(user: ISellerUserDTO, newCnpj: string): Promise<void>;
  updateUserName(user: ISellerUserDTO, newName: string): Promise<void>;
  updateUserEmail(user: ISellerUserDTO, newEmail: string): Promise<void>;
  updateUserPassword(user: ISellerUserDTO, newPassword: string): Promise<void>;
}

export { ISellerUser };
