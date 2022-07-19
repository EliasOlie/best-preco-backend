import { Request, Response } from "express";
import { ChangeSellerUserCnpjCase } from "./ChangeSellerUserCnpjCase";

class ChangeSellerUserCnpjController {
  constructor(private useCase: ChangeSellerUserCnpjCase){}

  async run(request: Request, response: Response) {
    const {email, newCnpj} = request.body

    try {
      await this.useCase.handle(email, newCnpj)
      response.send()
    } catch (error) {
      if (error instanceof Error) {
        response.status(400).send({message: error.message})
      }else{
        response.status(500).send({message: "Unexpected Error"})
      }
    }
  }
}

export { ChangeSellerUserCnpjController }