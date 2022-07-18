import { ChangeTransportUserNameCase } from "./ChangeTransportUserNameCase";
import { InMemoryTransportUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemoryTransportUserImplementation";
import { ChangeTransportUserNameController} from "./ChangeTransportUserNameController";

const changeTransportUserNameCase = new ChangeTransportUserNameCase(new InMemoryTransportUserImplementation)
const changeTransportUserNameController = new ChangeTransportUserNameController(changeTransportUserNameCase)

export { changeTransportUserNameController }