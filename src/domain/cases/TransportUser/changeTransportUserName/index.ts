import { ChangeTransportUserNameCase } from "./ChangeTransportUserNameCase";
import { InMemoryTransportUserImplementation } from "../../../../implementations/inMemory/InMemoryTransportUserImplementation";
import { ChangeTransportUserNameController} from "./ChangeTransportUserNameController";
import { MongoDBTransportUserImplementation } from "../../../../implementations/MongoDB/MongoTransportUserImplementation";

const changeTransportUserNameCase = new ChangeTransportUserNameCase(new MongoDBTransportUserImplementation)
const changeTransportUserNameController = new ChangeTransportUserNameController(changeTransportUserNameCase)

export { changeTransportUserNameController }