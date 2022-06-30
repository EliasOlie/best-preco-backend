import { ChangeBuyerUserPasswordCase } from "./ChangeBuyerUserPasswordCase";
import { InMemoryBuyerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemoryBuyerUserImplemetation";
import { ChangeBuyerUserPasswordController } from "./ChangeBuyerUserPasswordController";

const changeBuyerUserPasswordCase = new ChangeBuyerUserPasswordCase(new InMemoryBuyerUserImplementation)
const changeBuyerUserPasswordController = new ChangeBuyerUserPasswordController(changeBuyerUserPasswordCase)

export { changeBuyerUserPasswordCase, changeBuyerUserPasswordController}