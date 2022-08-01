import { CreateTransportUserCase } from "./CreateTransportUserCase";
import { InMemoryTransportUserImplementation } from "../../../../implementations/inMemory/InMemoryTransportUserImplementation";
import { CreateTransportUserController } from "./CreateTransportUserController";
import { MongoDBTransportUserImplementation } from "../../../../implementations/MongoDB/MongoTransportUserImplementation";


const createTransportUserCase = new CreateTransportUserCase(new MongoDBTransportUserImplementation)
const createTransportUserController = new CreateTransportUserController(createTransportUserCase)

export { createTransportUserController }