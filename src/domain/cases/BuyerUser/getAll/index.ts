import { GetAllCase } from "./getAllCase";
import { GetAllController } from "./getAllController";
import { InMemoryBuyerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemoryBuyerUserImplemetation";

const getAllCase = new GetAllCase(new InMemoryBuyerUserImplementation())
const getAllController = new GetAllController(getAllCase)

export { getAllCase, getAllController }