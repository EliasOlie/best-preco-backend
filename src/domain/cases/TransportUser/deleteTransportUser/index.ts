import { DeleteTransportUserCase } from "./DeleteTransportUserCase";
import { InMemoryTransportUserImplementation } from "../../../../implementations/inMemory/InMemoryTransportUserImplementation";
import { DeleteTransportUserController } from "./DeleteTransportUserController";
import { MongoDBTransportUserImplementation } from "../../../../implementations/MongoDB/MongoTransportUserImplementation";


const deleteTransportUserCase = new DeleteTransportUserCase(new MongoDBTransportUserImplementation)
const deleteTransportUserController = new DeleteTransportUserController(deleteTransportUserCase)

export { deleteTransportUserController }