import { BuyerUser, BuyerUserDTO } from "../models/BuyerUser";

interface IBuyerUserRepo {
    createBuyerUser(bUser: BuyerUserDTO):Promise<void>
    readBuyerUser(email: string): Promise<BuyerUser | null>
    deleteBuyerUser(email: string): Promise<void>
    getAll(): Promise<Array<BuyerUser>>
    updateUserName(user: BuyerUser, newName: string): Promise<void>
    updateUserEmail(user: BuyerUser, newEmail: string): Promise<void>
    updateUserPassword(user: BuyerUser, newPassword: string): Promise<void>
}

export { IBuyerUserRepo }