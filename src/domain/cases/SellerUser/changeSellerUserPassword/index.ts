import { ChangeSellerUserPasswordCase } from "./ChangeSellerUserPasswordCase";
import { InMemorytSellerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemorySellerUserImplementation";
import { ChangeSellerUserPasswordController } from "./ChangeSellerUserPasswordController";

const changeSellerUserPasswordCase = new ChangeSellerUserPasswordCase(new InMemorytSellerUserImplementation)
const changeSellerUserPasswordController = new ChangeSellerUserPasswordController(changeSellerUserPasswordCase)

export { changeSellerUserPasswordController }