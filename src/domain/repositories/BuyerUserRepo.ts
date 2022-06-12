import { BuyerUser, BuyerUserDTO } from "../models/BuyerUser";


export default interface IBuyerUserRepo {
    createBuyerUser(bUser: BuyerUser):Promise<void>
    readBuyerUser(email: string): Promise<BuyerUser | null>

}