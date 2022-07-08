import { Request, Response } from "express";
import { ChangeSellerUserPasswordCase } from "./ChangeSellerUserPasswordCase";

class ChangeSellerUserPasswordController {
  constructor(private useCase: ChangeSellerUserPasswordCase){}

  async run(request: Request, response: Response) {
    const { email, newPassword } = request.body

    try {
      this.useCase.handle(email, newPassword)
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

export { ChangeSellerUserPasswordController }