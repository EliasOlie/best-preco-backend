import { IBuyerUser } from "../../../repositories/BuyerUserRepo";

class GetAllCase {
    constructor(
        private buyerUserRepo: IBuyerUser
    ){}

    async handle(){
        const allUsers = await this.buyerUserRepo.getAll()
        return allUsers
    }
}

export { GetAllCase }