import { Request, Response } from "express";
import { ChangeSellerUserEmailCase } from "./ChangeSellerUserEmailCase";

class ChangeSellerUserEmailController {
  constructor(private useCase: ChangeSellerUserEmailCase){}

  async run(request: Request, response: Response){
    const { email, newEmail } = request.body

    try {
      await this.useCase.handle(email, newEmail)
      response.send()
    } catch (error) {
      if (error instanceof Error) {
        response.status(400).send({message: error.message})
      }else{
        response.status(500).send({message: "Unexpected error"})
      }
    }
  }
}

export { ChangeSellerUserEmailController }