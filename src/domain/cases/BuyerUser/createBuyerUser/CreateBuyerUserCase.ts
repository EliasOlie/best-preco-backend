import { BuyerUser, BuyerUserDTO } from "../../../models/BuyerUser";
import IBuyerUserRepo from "../../../repositories/BuyerUserRepo";

class CreateBuyerUserCase{
    constructor(
        private buyerUserRepo: IBuyerUserRepo
    ){}

    async handle(data: BuyerUserDTO){
        const userExists = await this.buyerUserRepo.readBuyerUser(data.userEmail)

        if (!userExists){
            try {
                const newUser = new BuyerUser(data)
                await this.buyerUserRepo.createBuyerUser(newUser)
            } catch (error) {
                throw new Error("Something went wrong :P")
            }
        }
    }
}

export {CreateBuyerUserCase}