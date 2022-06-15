import { BuyerUser } from "../models/BuyerUser";

interface BuyerUserChangeDTO {
    field: string
    value: any
}

interface IBuyerUserRepo {
    createBuyerUser(bUser: BuyerUser):Promise<void>
    readBuyerUser(email: string): Promise<BuyerUser | null>
    updateBuyerUser(email: string, payload: BuyerUserChangeDTO): Promise<void>
    deleteBuyerUser(email: string): Promise<void>
    getAll(): Promise<Array<BuyerUser>>
}

export { IBuyerUserRepo, BuyerUserChangeDTO}