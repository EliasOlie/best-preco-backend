import { ReadTransportUserCase } from "./ReadTransportUserCase";
import { InMemoryTransportUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemoryTransportUserImplementation";
import { ReadTransportUserController } from "./ReadTransportUserController";

const readTransportUserCase = new ReadTransportUserCase(new InMemoryTransportUserImplementation)
const readTransportUserController = new ReadTransportUserController(readTransportUserCase)

export { readTransportUserController }