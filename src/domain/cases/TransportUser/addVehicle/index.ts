import { MongoDBTransportUserImplementation } from "../../../../implementations/MongoDB/MongoTransportUserImplementation";
import { AddVehicleCase } from "./AddVehicleCase";
import { AddVehicleController } from "./AddVehicleController";

const addVehicleCase = new AddVehicleCase(new MongoDBTransportUserImplementation)
const addVehicleController = new AddVehicleController(addVehicleCase)

export { addVehicleController }