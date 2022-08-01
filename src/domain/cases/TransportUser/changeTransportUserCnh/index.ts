import { ChangeTransportUserCnhCase } from "./ChangeTransportUserCnhCase";
import { InMemoryTransportUserImplementation } from "../../../../implementations/inMemory/InMemoryTransportUserImplementation";
import { ChangeTransportUserCnhController } from "./ChangeTransportUserCnhController";
import { MongoDBTransportUserImplementation } from "../../../../implementations/MongoDB/MongoTransportUserImplementation";

const changeTransportUserCnhCase = new ChangeTransportUserCnhCase(new MongoDBTransportUserImplementation)
const changeTransportUserCnhController = new ChangeTransportUserCnhController(changeTransportUserCnhCase)

export { changeTransportUserCnhController }