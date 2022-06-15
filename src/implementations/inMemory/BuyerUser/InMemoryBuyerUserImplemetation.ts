import { BuyerUser } from "../../../domain/models/BuyerUser";
import { IBuyerUserRepo, BuyerUserChangeDTO } from "../../../domain/repositories/BuyerUserRepo";

let inMemoryDB:Array<BuyerUser> = []

class InMemoryBuyerUserImplementation implements IBuyerUserRepo {
    async createBuyerUser(bUser: BuyerUser): Promise<void> {
        inMemoryDB.push(new BuyerUser(bUser))
    }

    async readBuyerUser(email: string): Promise<BuyerUser | null> {
        return inMemoryDB.filter((user) => (
            user.userEmail === email
        ))[0]
    }

    async deleteBuyerUser(email: string): Promise<void> {
        inMemoryDB = inMemoryDB.splice(inMemoryDB.findIndex(user => user.userEmail === email), 1)
    }

    async getAll(): Promise<BuyerUser[]> {
        return inMemoryDB
    }

    async updateBuyerUser(email: string, payload: BuyerUserChangeDTO): Promise<void> { //Métodos isolados -> Manter a intenção explicita "Clean Code!"
        const user = await this.readBuyerUser(email)
        // if (user) {
        //     user[payload.field] = payload.value
        // }else{
        //     throw new Error("This user does not exists")
        // }
    }
}

export { InMemoryBuyerUserImplementation }