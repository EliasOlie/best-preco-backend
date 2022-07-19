import { ChangeTransportUserCnhCase } from "./ChangeTransportUserCnhCase";
import { InMemoryTransportUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemoryTransportUserImplementation";
import { ChangeTransportUserCnhController } from "./ChangeTransportUserCnhController";

const changeTransportUserCnhCase = new ChangeTransportUserCnhCase(new InMemoryTransportUserImplementation)
const changeTransportUserCnhController = new ChangeTransportUserCnhController(changeTransportUserCnhCase)

export { changeTransportUserCnhController }