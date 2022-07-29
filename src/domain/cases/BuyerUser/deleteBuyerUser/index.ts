import { DeleteBuyerUserCase } from "./DeleteBuyerUserCase";
import { DeleteBuyerUserController } from "./DeleteBuyerUserController";
import { InMemoryBuyerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemoryBuyerUserImplemetation";
import { MongoDBBuyerUserImplementation } from "../../../../implementations/MongoDB/MongoBuyerUserImplementation";

const deleteBuyerUserCase = new DeleteBuyerUserCase(new MongoDBBuyerUserImplementation)
const deleteBuyerUserController = new DeleteBuyerUserController(deleteBuyerUserCase)

export { deleteBuyerUserCase, deleteBuyerUserController }