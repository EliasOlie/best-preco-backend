import { ReadSellerUserCase } from "./ReadSellerUserCase";
import { InMemorytSellerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemorySellerUserImplementation";
import { ReadSellerUserController } from "./ReadSellerUserController";

const readSellerUserCase = new ReadSellerUserCase(new InMemorytSellerUserImplementation)
const readSellerUserController = new ReadSellerUserController(readSellerUserCase)

export { readSellerUserController }