import { CreateBuyerUserCase } from "./CreateBuyerUserCase";
import { CreateBuyerUserController } from "./CreateBuyerUserController";
import { InMemoryBuyerUserImplementation } from "../../../../implementations/inMemory/InMemoryBuyerUserImplemetation";
import { MongoDBBuyerUserImplementation } from "../../../../implementations/MongoDB/MongoBuyerUserImplementation";

const createBuyerUserCase = new CreateBuyerUserCase(new MongoDBBuyerUserImplementation)
const createBuyerUserController = new CreateBuyerUserController(createBuyerUserCase)

export {createBuyerUserCase, createBuyerUserController}
