import { InMemoryBuyerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemoryBuyerUserImplemetation";
import { ChangeBuyerUserEmailCase } from "./ChangeBuyerUserEmailCase";
import { ChangeBuyerUserEmailController } from "./ChangeBuyerUserEmailController";

const changeBuyerUserEmailCase = new ChangeBuyerUserEmailCase(new InMemoryBuyerUserImplementation)
const changeBuyerUserEmailController = new ChangeBuyerUserEmailController(changeBuyerUserEmailCase)

export { changeBuyerUserEmailCase ,changeBuyerUserEmailController }