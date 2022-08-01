import { ReadSellerUserCase } from "./ReadSellerUserCase";
import { InMemorytSellerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemorySellerUserImplementation";
import { ReadSellerUserController } from "./ReadSellerUserController";
import { MongoDBSellerUserImplementation } from "../../../../implementations/MongoDB/MongoSellerUserImplementation";

const readSellerUserCase = new ReadSellerUserCase(new MongoDBSellerUserImplementation)
const readSellerUserController = new ReadSellerUserController(readSellerUserCase)

export { readSellerUserController }