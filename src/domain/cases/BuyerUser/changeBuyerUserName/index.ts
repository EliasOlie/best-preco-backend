import { ChangeBuyerUserNameCase } from "./ChangeBuyerUserNameCase";
import { ChangeBuyerUserNameController } from "./ChangeBuyerUserNameController";
import { InMemoryBuyerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemoryBuyerUserImplemetation";

const changeBuyerUserNameCase = new ChangeBuyerUserNameCase(new InMemoryBuyerUserImplementation)
const changeBuyerUserNameController = new ChangeBuyerUserNameController(changeBuyerUserNameCase)

export { changeBuyerUserNameController }