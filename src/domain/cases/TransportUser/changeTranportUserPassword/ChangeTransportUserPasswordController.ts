import { Request, Response } from "express";
import { ChangeTransportUserPasswordCase } from "./ChangeTransportUserPasswordCase";

class ChangeTransportUserPasswordController {
  constructor(private useCase: ChangeTransportUserPasswordCase){}

  async run(request: Request, response: Response) {
    const { email, newPassword} = request.body

    try {
      await this.useCase.handle(email, newPassword)
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

export { ChangeTransportUserPasswordController }