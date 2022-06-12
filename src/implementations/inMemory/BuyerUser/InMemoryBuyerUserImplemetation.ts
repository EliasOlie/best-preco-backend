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

    async readBuyerUser(email?: string | undefined, id?: string | undefined): Promise<BuyerUser | null | undefined> {
        if (email){
            const user = await inMemoryDB.filter((tUser) => (
                tUser.userEmail === email
            ))
            return user[0]
        }

        if (id){
            const user = await inMemoryDB.filter((tUser) => (
                tUser.id === id
            ))
            return user[0]
        }

        if (!email && !id) {
            throw new Error("You need to supply at least one of those:\memail,\nid")
        }
    }
}

export { InMemoryBuyerUserImplementation }