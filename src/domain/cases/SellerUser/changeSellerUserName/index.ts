import { ChangeSellerUserNameCase } from "./ChangeSellerUserNameCase";
import { InMemorytSellerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemorySellerUserImplementation";
import { ChangeSellerUserNameController } from "./ChangeSellerUserNameController";
import { MongoDBSellerUserImplementation } from "../../../../implementations/MongoDB/MongoSellerUserImplementation";

const changeSellerUserNameCase = new ChangeSellerUserNameCase(new MongoDBSellerUserImplementation)
const changeSellerUserNameController = new ChangeSellerUserNameController(changeSellerUserNameCase)

export { changeSellerUserNameController }