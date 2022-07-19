import { DeleteTransportUserCase } from "./DeleteTransportUserCase";
import { InMemoryTransportUserImplementation } from "../../../../implementations/inMemory/BuyerUser/InMemoryTransportUserImplementation";
import { DeleteTransportUserController } from "./DeleteTransportUserController";

const deleteTransportUserCase = new DeleteTransportUserCase(new InMemoryTransportUserImplementation)
const deleteTransportUserController = new DeleteTransportUserController(deleteTransportUserCase)

export { deleteTransportUserController }