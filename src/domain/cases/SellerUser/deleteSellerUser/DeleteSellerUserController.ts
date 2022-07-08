import { Request, Response } from "express";
import { DeleteSellerUserCase } from "./DeleteSellserUserCase";

class DeleteSellerUserController {
  constructor(private useCase: DeleteSellerUserCase){}

  async run(request: Request, response: Response) {
    const email: string = request.params.email
    try {
      await this.useCase.handle(email)
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

export { DeleteSellerUserController }