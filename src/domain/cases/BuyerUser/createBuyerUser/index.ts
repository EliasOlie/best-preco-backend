import { CreateBuyerUserCase } from "./CreateBuyerUserCase";
import { CreateBuyerUserController } from "./CreateBuyerUserController";
import { InMemoryBuyerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemoryBuyerUserImplemetation";

const createBuyerUserCase = new CreateBuyerUserCase(new InMemoryBuyerUserImplementation)
const createBuyerUserController = new CreateBuyerUserController(createBuyerUserCase)

export {createBuyerUserCase, createBuyerUserController}
