import { ChangeTransportUserPasswordCase } from "./ChangeTransportUserPasswordCase";
import { InMemoryTransportUserImplementation } from "../../../../implementations/inMemory/InMemoryTransportUserImplementation";
import { ChangeTransportUserPasswordController} from "./ChangeTransportUserPasswordController";
import { MongoDBTransportUserImplementation } from "../../../../implementations/MongoDB/MongoTransportUserImplementation";

const changeTransportUserPasswordCase = new ChangeTransportUserPasswordCase(new MongoDBTransportUserImplementation)
const changeTransportUserPasswordController = new ChangeTransportUserPasswordController(changeTransportUserPasswordCase)

export { changeTransportUserPasswordController }