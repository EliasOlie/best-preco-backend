import { IBuyerUserRepo } from "../../../repositories/BuyerUserRepo";

class GetAllCase {
    constructor(
        private buyerUserRepo: IBuyerUserRepo
    ){}

    async handle(){
        const allUsers = await this.buyerUserRepo.getAll()
        return allUsers
    }
}

export { GetAllCase }