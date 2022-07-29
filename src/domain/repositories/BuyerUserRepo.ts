import { BuyerUser, BuyerUserDTO } from "../models/BuyerUser";

interface IBuyerUserRepo {
    createBuyerUser(bUser: BuyerUserDTO):Promise<void>
    readBuyerUser(email: string): Promise<BuyerUserDTO | null>
    deleteBuyerUser(email: string): Promise<void>
    getAll(): Promise<BuyerUserDTO[]>
    updateUserName(user: BuyerUserDTO, newName: string): Promise<void>
    updateUserEmail(user: BuyerUserDTO, newEmail: string): Promise<void>
    updateUserPassword(user: BuyerUserDTO, newPassword: string): Promise<void>
}

export { IBuyerUserRepo }