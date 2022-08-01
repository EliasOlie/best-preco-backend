import { ChangeSellerUserEmailCase } from "./ChangeSellerUserEmailCase";
import { InMemorytSellerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemorySellerUserImplementation";
import { ChangeSellerUserEmailController } from "./ChangeSellerUserEmailController";
import { MongoDBSellerUserImplementation } from "../../../../implementations/MongoDB/MongoSellerUserImplementation";

const changeSellerUserEmailCase = new ChangeSellerUserEmailCase(new MongoDBSellerUserImplementation)
const changeSellerUserEmailController = new ChangeSellerUserEmailController(changeSellerUserEmailCase)

export { changeSellerUserEmailController }