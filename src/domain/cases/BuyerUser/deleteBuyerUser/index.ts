import { DeleteBuyerUserCase } from "./DeleteBuyerUserCase";
import { DeleteBuyerUserController } from "./DeleteBuyerUserController";
import { InMemoryBuyerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemoryBuyerUserImplemetation";

const deleteBuyerUserCase = new DeleteBuyerUserCase(new InMemoryBuyerUserImplementation)
const deleteBuyerUserController = new DeleteBuyerUserController(deleteBuyerUserCase)

export { deleteBuyerUserCase, deleteBuyerUserController }