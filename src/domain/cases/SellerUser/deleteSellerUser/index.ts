import { DeleteSellerUserCase } from "./DeleteSellserUserCase";
import { InMemorytSellerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemorySellerUserImplementation"
import { DeleteSellerUserController } from "./DeleteSellerUserController";

const deleteSellerUserCase = new DeleteSellerUserCase(new InMemorytSellerUserImplementation)
const deleteSellerUserController = new DeleteSellerUserController(deleteSellerUserCase)

export { deleteSellerUserController }