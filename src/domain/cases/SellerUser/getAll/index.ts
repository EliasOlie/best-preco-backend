import { GetAllCase } from "./GetAllCase";
import { InMemorytSellerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemorySellerUserImplementation";
import { GetAllController } from "./GetAllController";

const getAllCase = new GetAllCase(new InMemorytSellerUserImplementation)
const getAllController = new GetAllController(getAllCase)

export { getAllController }