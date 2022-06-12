import { BuyerUser } from "../../../domain/models/BuyerUser";
import IBuyerUserRepo from "../../../domain/repositories/BuyerUserRepo";

const inMemoryDB:Array<BuyerUser> = []

class InMemoryBuyerUserImplementation implements IBuyerUserRepo {
    async createBuyerUser(bUser: BuyerUser): Promise<void> {
        const userExists = await this.readBuyerUser(bUser.userEmail)
        if (!userExists) {
            const newUser = new BuyerUser(bUser)
            console.log(newUser)
            inMemoryDB.push(newUser)
        }else{
            throw new Error("This user already exists!")
        }
        console.log(userExists)
    }

    async readBuyerUser(email: string): Promise<BuyerUser | null> {
        return inMemoryDB.filter((user) => (
            user.userEmail === email
        ))[0]
    }
}

export { InMemoryBuyerUserImplementation }