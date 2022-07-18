import { GetAllCase } from "./GetAllCase";
import { InMemoryTransportUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemoryTransportUserImplementation";
import { GetAllController } from "./GetAllController";

const getAllCase = new GetAllCase(new InMemoryTransportUserImplementation)
const getAllController = new GetAllController(getAllCase)

export { getAllController }