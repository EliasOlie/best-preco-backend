import { IBuyerUserRepo } from "../../../repositories/BuyerUserRepo";

class DeleteBuyerUserCase {
    constructor(
        private buyerUserRepo: IBuyerUserRepo
    ){}

    async handle(email: string){
        await this.buyerUserRepo.deleteBuyerUser(email)
    }
}

export { DeleteBuyerUserCase }