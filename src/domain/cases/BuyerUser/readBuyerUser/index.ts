import { ReadBuyerUserCase } from "./ReadBuyerUserCase";
import { ReadBuyerUserController } from "./ReadBuyerUserController";
import { InMemoryBuyerUserImplementation } from "../../../../implementations/inMemory/InMemoryBuyerUserImplemetation";
import { MongoDBBuyerUserImplementation } from "../../../../implementations/MongoDB/MongoBuyerUserImplementation";

const readBuyerUserCase = new ReadBuyerUserCase(new MongoDBBuyerUserImplementation)
const readBuyerUserController = new ReadBuyerUserController(readBuyerUserCase)

export { readBuyerUserCase, readBuyerUserController}