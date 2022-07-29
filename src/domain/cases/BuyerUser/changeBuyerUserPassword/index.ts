import { ChangeBuyerUserPasswordCase } from "./ChangeBuyerUserPasswordCase";
import { InMemoryBuyerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemoryBuyerUserImplemetation";
import { ChangeBuyerUserPasswordController } from "./ChangeBuyerUserPasswordController";
import { MongoDBBuyerUserImplementation } from "../../../../implementations/MongoDB/MongoBuyerUserImplementation";


const changeBuyerUserPasswordCase = new ChangeBuyerUserPasswordCase(new MongoDBBuyerUserImplementation)
const changeBuyerUserPasswordController = new ChangeBuyerUserPasswordController(changeBuyerUserPasswordCase)

export { changeBuyerUserPasswordCase, changeBuyerUserPasswordController}