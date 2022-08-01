import { ChangeSellerUserCnpjCase } from "./ChangeSellerUserCnpjCase";
import { InMemorytSellerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemorySellerUserImplementation";
import { ChangeSellerUserCnpjController } from "./ChangeSellerUserCnpjController";
import { MongoDBSellerUserImplementation } from "../../../../implementations/MongoDB/MongoSellerUserImplementation";

const changeSellerUserCnpjCase = new ChangeSellerUserCnpjCase(new MongoDBSellerUserImplementation)
const changeSellerUserCnpjController = new ChangeSellerUserCnpjController(changeSellerUserCnpjCase)

export { changeSellerUserCnpjController }