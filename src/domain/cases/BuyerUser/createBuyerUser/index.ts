import { CreateBuyerUserCase } from "./CreateBuyerUserCase";
import { CreateBuyerUserController } from "./CreateBuyerUserController";
import { InMemoryBuyerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemoryBuyerUserImplemetation";
import { MongoDBBuyerUserImplementation } from "../../../../implementations/MongoDB/MongoBuyerUserImplementation";
import { dbConnectBuyerUser } from "../../../../dbal/mongo.service";

dbConnectBuyerUser().catch((err) => {
  console.error(err)
})

const createBuyerUserCase = new CreateBuyerUserCase(new MongoDBBuyerUserImplementation)
const createBuyerUserController = new CreateBuyerUserController(createBuyerUserCase)

export {createBuyerUserCase, createBuyerUserController}
