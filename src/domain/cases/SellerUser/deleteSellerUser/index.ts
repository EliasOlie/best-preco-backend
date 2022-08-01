import { DeleteSellerUserCase } from "./DeleteSellserUserCase";
import { InMemorytSellerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemorySellerUserImplementation"
import { DeleteSellerUserController } from "./DeleteSellerUserController";
import { MongoDBSellerUserImplementation } from "../../../../implementations/MongoDB/MongoSellerUserImplementation";

const deleteSellerUserCase = new DeleteSellerUserCase(new MongoDBSellerUserImplementation)
const deleteSellerUserController = new DeleteSellerUserController(deleteSellerUserCase)

export { deleteSellerUserController }