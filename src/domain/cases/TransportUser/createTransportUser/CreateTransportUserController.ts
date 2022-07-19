import { Request, Response } from "express";
import { TransportUserDTO } from "../../../models/TransportUser";
import { CreateTransportUserCase } from "./CreateTransportUserCase";

class CreateTransportUserController {
  constructor(private useCase: CreateTransportUserCase){}

  async run(request: Request, response: Response){
    const transportUserPayload: TransportUserDTO = request.body

    try {
      await this.useCase.handle(transportUserPayload)
      response.send()
    } catch (error) {
      if(error instanceof Error) {
        response.status(400).send({message: error.message})
      }else{
        response.status(500).send({message: "Something went wrong"})
      }
    }
  }
}

export { CreateTransportUserController}