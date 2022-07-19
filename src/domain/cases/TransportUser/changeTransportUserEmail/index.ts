import { ChangeTransportUserEmailCase } from "./ChangeTransportUserEmailCase";
import { InMemoryTransportUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemoryTransportUserImplementation";
import { ChangeTransportUserEmailController } from "./ChangeTransportUserEmailController";

const changeTransportUserEmailCase = new ChangeTransportUserEmailCase(new InMemoryTransportUserImplementation)
const changeTransportUserEmailController = new ChangeTransportUserEmailController(changeTransportUserEmailCase)

export { changeTransportUserEmailController }