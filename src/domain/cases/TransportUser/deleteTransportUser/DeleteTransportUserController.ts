import { Request, Response } from "express";
import { DeleteTransportUserCase } from "./DeleteTransportUserCase";

class DeleteTransportUserController {
  constructor(private useCase: DeleteTransportUserCase){}

  async run(request: Request, response: Response) {
    const email = request.params.email

    try {
      await this.useCase.handle(email)
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

export { DeleteTransportUserController }