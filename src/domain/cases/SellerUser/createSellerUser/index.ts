import { CreateSellerUserCase } from "./CreateSellerUserCase";
import { InMemorytSellerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemorySellerUserImplementation";
import { CreateSellerUserController } from "./CreateSellerUserController";

const createSellerUserCase = new CreateSellerUserCase(new InMemorytSellerUserImplementation)
const createSellerUserController = new CreateSellerUserController(createSellerUserCase)

export { createSellerUserController }