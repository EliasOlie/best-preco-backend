import { GetAllCase } from "./GetAllCase";
import { InMemoryTransportUserImplementation } from "../../../../implementations/inMemory/InMemoryTransportUserImplementation";
import { GetAllController } from "./GetAllController";
import { MongoDBTransportUserImplementation } from "../../../../implementations/MongoDB/MongoTransportUserImplementation";

const getAllCase = new GetAllCase(new MongoDBTransportUserImplementation)
const getAllController = new GetAllController(getAllCase)

export { getAllController }