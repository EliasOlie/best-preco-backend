import { CreateTransportUserCase } from "./CreateTransportUserCase";
import { InMemoryTransportUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemoryTransportUserImplementation";
import { CreateTransportUserController } from "./CreateTransportUserController";

const createTransportUserCase = new CreateTransportUserCase(new InMemoryTransportUserImplementation)
const createTransportUserController = new CreateTransportUserController(createTransportUserCase)

export { createTransportUserController }