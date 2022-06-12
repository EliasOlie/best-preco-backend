import { BuyerUser, BuyerUserDTO } from "../models/BuyerUser";


export default interface IBuyerUserRepo {
    createBuyerUser(bUser: BuyerUser):Promise<void>
    readBuyerUser(email?: string, id?: string): Promise<BuyerUser | null |undefined>

}