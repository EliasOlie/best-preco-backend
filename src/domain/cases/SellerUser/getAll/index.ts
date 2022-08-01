import { GetAllCase } from "./GetAllCase";
import { InMemorytSellerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemorySellerUserImplementation";
import { GetAllController } from "./GetAllController";
import { MongoDBSellerUserImplementation } from "../../../../implementations/MongoDB/MongoSellerUserImplementation";

const getAllCase = new GetAllCase(new MongoDBSellerUserImplementation)
const getAllController = new GetAllController(getAllCase)

export { getAllController }