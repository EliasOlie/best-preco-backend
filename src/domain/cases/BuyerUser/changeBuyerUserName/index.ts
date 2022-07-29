import { ChangeBuyerUserNameCase } from "./ChangeBuyerUserNameCase";
import { ChangeBuyerUserNameController } from "./ChangeBuyerUserNameController";
import { InMemoryBuyerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemoryBuyerUserImplemetation";
import { MongoDBBuyerUserImplementation } from "../../../../implementations/MongoDB/MongoBuyerUserImplementation";

const changeBuyerUserNameCase = new ChangeBuyerUserNameCase(new MongoDBBuyerUserImplementation)
const changeBuyerUserNameController = new ChangeBuyerUserNameController(changeBuyerUserNameCase)

export { changeBuyerUserNameController }