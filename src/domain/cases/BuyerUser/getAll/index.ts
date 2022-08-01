import { GetAllCase } from "./getAllCase";
import { GetAllController } from "./getAllController";
import { InMemoryBuyerUserImplementation } from "../../../../implementations/inMemory/InMemoryBuyerUserImplemetation";
import { MongoDBBuyerUserImplementation } from "../../../../implementations/MongoDB/MongoBuyerUserImplementation";

const getAllCase = new GetAllCase(new MongoDBBuyerUserImplementation)
const getAllController = new GetAllController(getAllCase)

export { getAllCase, getAllController }