import { ChangeNameCase } from "./ChangeNameCase";
import { ChangeNameController } from "./ChangeNameController";
import { InMemoryBuyerUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemoryBuyerUserImplemetation";

const useCase = new ChangeNameCase(new InMemoryBuyerUserImplementation)
const changeNameController = new ChangeNameController(useCase)

export { changeNameController }