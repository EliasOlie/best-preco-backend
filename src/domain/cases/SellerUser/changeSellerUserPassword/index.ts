import { ChangeSellerUserPasswordCase } from "./ChangeSellerUserPasswordCase";
import { InMemorytSellerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemorySellerUserImplementation";
import { ChangeSellerUserPasswordController } from "./ChangeSellerUserPasswordController";
import { MongoDBSellerUserImplementation } from "../../../../implementations/MongoDB/MongoSellerUserImplementation";

const changeSellerUserPasswordCase = new ChangeSellerUserPasswordCase(new MongoDBSellerUserImplementation)
const changeSellerUserPasswordController = new ChangeSellerUserPasswordController(changeSellerUserPasswordCase)

export { changeSellerUserPasswordController }