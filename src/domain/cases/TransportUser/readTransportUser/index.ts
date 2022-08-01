import { ReadTransportUserCase } from "./ReadTransportUserCase";
import { InMemoryTransportUserImplementation } from "../../../../implementations/inMemory/InMemoryTransportUserImplementation";
import { ReadTransportUserController } from "./ReadTransportUserController";
import { MongoDBTransportUserImplementation } from "../../../../implementations/MongoDB/MongoTransportUserImplementation";

const readTransportUserCase = new ReadTransportUserCase(new MongoDBTransportUserImplementation)
const readTransportUserController = new ReadTransportUserController(readTransportUserCase)

export { readTransportUserController }