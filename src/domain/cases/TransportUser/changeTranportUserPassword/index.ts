import { ChangeTransportUserPasswordCase } from "./ChangeTransportUserPasswordCase";
import { InMemoryTransportUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemoryTransportUserImplementation";
import { ChangeTransportUserPasswordController} from "./ChangeTransportUserPasswordController";

const changeTransportUserPasswordCase = new ChangeTransportUserPasswordCase(new InMemoryTransportUserImplementation)
const changeTransportUserPasswordController = new ChangeTransportUserPasswordController(changeTransportUserPasswordCase)

export { changeTransportUserPasswordController }