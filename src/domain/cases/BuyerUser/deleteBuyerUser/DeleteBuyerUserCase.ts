import { IBuyerUser } from "../../../repositories/BuyerUserRepo";
class DeleteBuyerUserCase {
    constructor(
        private buyerUserRepo: IBuyerUser
    ){}
    
    async handle(email: string){
        const userExists = await this.buyerUserRepo.readBuyerUser(email)
        if(userExists){
            await this.buyerUserRepo.deleteBuyerUser(email)
        }else{
            throw new Error("This user does not exists")
        }
    }
}

export { DeleteBuyerUserCase }