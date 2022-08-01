import { IBuyerUser } from "../../../repositories/BuyerUserRepo";

class ReadBuyerUserCase {
    constructor(
        private buyerUserRepo: IBuyerUser
    ){}
    
    async handle(email: string){
        const user = await this.buyerUserRepo.readBuyerUser(email)
        if(!user){
            throw new Error("This user does not exists")
        }

        return user
    }
}

export { ReadBuyerUserCase }