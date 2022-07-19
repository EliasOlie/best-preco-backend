import { Request, Response } from "express";
import { ReadTransportUserCase } from "./ReadTransportUserCase";

class ReadTransportUserController {
  constructor(private useCase: ReadTransportUserCase) {}

  async run(request: Request, response: Response) {
    const email = request.params.email

    try {
      const user = await this.useCase.handle(email)
      response.send(user)
    } catch (error) {
      if (error instanceof Error) {
        response.status(400).send({message: error.message})
      }else{
        response.status(500).send({message: "Something happend :/"})
      }
    }
  }
}

export { ReadTransportUserController }