import { CreateSellerUserCase } from "./CreateSellerUserCase";
import { InMemorytSellerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemorySellerUserImplementation";
import { CreateSellerUserController } from "./CreateSellerUserController";
import { MongoDBSellerUserImplementation } from "../../../../implementations/MongoDB/MongoSellerUserImplementation";

const createSellerUserCase = new CreateSellerUserCase(new MongoDBSellerUserImplementation)
const createSellerUserController = new CreateSellerUserController(createSellerUserCase)

export { createSellerUserController }