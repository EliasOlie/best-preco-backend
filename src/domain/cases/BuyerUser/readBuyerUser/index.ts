import { ReadBuyerUserCase } from "./ReadBuyerUserCase";
import { ReadBuyerUserController } from "./ReadBuyerUserController";
import { InMemoryBuyerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemoryBuyerUserImplemetation";

const readBuyerUserCase = new ReadBuyerUserCase(new InMemoryBuyerUserImplementation)
const readBuyerUserController = new ReadBuyerUserController(readBuyerUserCase)

export { readBuyerUserCase, readBuyerUserController}