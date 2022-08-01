import { Request, Response } from "express";
import { AddVehicleCase } from "./AddVehicleCase";

class AddVehicleController {
  constructor(private useCase: AddVehicleCase) {}

  async run(request: Request, response: Response) {
    const payload = request.body

    try {
      this.useCase.handle(payload.email, payload.vehicle)
      response.status(201).send()
    } catch (error) {
      if(error instanceof Error){
        response.status(400).send({message: error.message})
      }else{
        response.status(500).send()
      }
    }
  }
}

export { AddVehicleController }