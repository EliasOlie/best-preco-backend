import { InMemoryTransportUserImplementation } from "../../../../implementations/inMemory/InMemoryTransportUserImplementation";
import { ChangeTransportUserEmailCase } from "./ChangeTransportUserEmailCase";
import { ChangeTransportUserEmailController } from "./ChangeTransportUserEmailController";
import { MongoDBTransportUserImplementation } from "../../../../implementations/MongoDB/MongoTransportUserImplementation";

const changeTransportUserEmailCase = new ChangeTransportUserEmailCase(new MongoDBTransportUserImplementation)
const changeTransportUserEmailController = new ChangeTransportUserEmailController(changeTransportUserEmailCase)

export { changeTransportUserEmailController }