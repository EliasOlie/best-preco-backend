import { ChangeSellerUserCnpjCase } from "./ChangeSellerUserCnpjCase";
import { InMemorytSellerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemorySellerUserImplementation";
import { ChangeSellerUserCnpjController } from "./ChangeSellerUserCnpjController";

const changeSellerUserCnpjCase = new ChangeSellerUserCnpjCase(new InMemorytSellerUserImplementation)
const changeSellerUserCnpjController = new ChangeSellerUserCnpjController(changeSellerUserCnpjCase)

export { changeSellerUserCnpjController }