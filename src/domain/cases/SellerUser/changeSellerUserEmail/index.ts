import { ChangeSellerUserEmailCase } from "./ChangeSellerUserEmailCase";
import { InMemorytSellerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemorySellerUserImplementation";
import { ChangeSellerUserEmailController } from "./ChangeSellerUserEmailController";

const changeSellerUserEmailCase = new ChangeSellerUserEmailCase(new InMemorytSellerUserImplementation)
const changeSellerUserEmailController = new ChangeSellerUserEmailController(changeSellerUserEmailCase)

export { changeSellerUserEmailController }