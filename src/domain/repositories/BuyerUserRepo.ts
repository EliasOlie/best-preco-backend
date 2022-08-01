import { IBuyerUserDTO, BuyerUserDTO } from "../models/BuyerUser";

interface IBuyerUser {
    createBuyerUser(bUser: BuyerUserDTO):Promise<void>
    readBuyerUser(email: string): Promise<BuyerUserDTO | null>
    deleteBuyerUser(email: string): Promise<void>
    getAll(): Promise<BuyerUserDTO[]>
    updateUserName(user: IBuyerUserDTO, newName: string): Promise<void>
    updateUserEmail(user: IBuyerUserDTO, newEmail: string): Promise<void>
    updateUserPassword(user: IBuyerUserDTO, newPassword: string): Promise<void>
}

export { IBuyerUser }