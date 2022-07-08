import { SellerUser, SellerUserDTO } from "../models/SellerUser";

interface ISellerUser {
  createSellerUser(sUser: SellerUserDTO): Promise<void>;
  getSellerUser(email: string): Promise<SellerUser | null>;
  deleteSellerUser(email: string): Promise<void>;
  getAll(): Promise<Array<SellerUser>>;
  updateUserCnpj(user: SellerUser, newCnpj: string): Promise<void>;
  updateUserName(user: SellerUser, newName: string): Promise<void>;
  updateUserEmail(user: SellerUser, newEmail: string): Promise<void>;
  updateUserPassword(user: SellerUser, newPassword: string): Promise<void>;
}

export { ISellerUser };
