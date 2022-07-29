import { InMemoryBuyerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemoryBuyerUserImplemetation";
import { ChangeBuyerUserEmailCase } from "./ChangeBuyerUserEmailCase";
import { ChangeBuyerUserEmailController } from "./ChangeBuyerUserEmailController";
import { MongoDBBuyerUserImplementation } from "../../../../implementations/MongoDB/MongoBuyerUserImplementation";

const changeBuyerUserEmailCase = new ChangeBuyerUserEmailCase(new MongoDBBuyerUserImplementation)
const changeBuyerUserEmailController = new ChangeBuyerUserEmailController(changeBuyerUserEmailCase)

export { changeBuyerUserEmailCase ,changeBuyerUserEmailController }