import { Request, Response } from "express";
import { ReadSellerUserCase } from "./ReadSellerUserCase";

class ReadSellerUserController {
  constructor(private useCase: ReadSellerUserCase){}

  async run(requets: Request, response: Response) {
    const email: string = requets.params.email
    
    try {
      const user = await this.useCase.handle(email)
      response.send(user)
    } catch (error) {
      if (error instanceof Error) {
        response.status(400).send({message: error.message})
      }else{
        response.status(500).send({message: "Unexpected error"})
      }
    }
  }
}

export { ReadSellerUserController }