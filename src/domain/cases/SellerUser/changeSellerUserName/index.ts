import { ChangeSellerUserNameCase } from "./ChangeSellerUserNameCase";
import { InMemorytSellerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemorySellerUserImplementation";
import { ChangeSellerUserNameController } from "./ChangeSellerUserNameController";

const changeSellerUserNameCase = new ChangeSellerUserNameCase(new InMemorytSellerUserImplementation)
const changeSellerUserNameController = new ChangeSellerUserNameController(changeSellerUserNameCase)

export { changeSellerUserNameController }