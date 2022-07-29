import { GetAllCase } from "./getAllCase";
import { GetAllController } from "./getAllController";
import { InMemoryBuyerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemoryBuyerUserImplemetation";
import { MongoDBBuyerUserImplementation } from "../../../../implementations/MongoDB/MongoBuyerUserImplementation";
import { dbConnectBuyerUser } from "../../../../dbal/mongo.service";

dbConnectBuyerUser().catch((err) => {
  console.error(err)
})

const getAllCase = new GetAllCase(new MongoDBBuyerUserImplementation)
const getAllController = new GetAllController(getAllCase)

export { getAllCase, getAllController }