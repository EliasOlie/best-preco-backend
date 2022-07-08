import { Request, Response } from "express";
import { SellerUserDTO } from "../../../models/SellerUser";
import { CreateSellerUserCase } from "./CreateSellerUserCase";

class CreateSellerUserController {
  constructor(
    private useCase: CreateSellerUserCase
  ){}

  async run(request: Request, response: Response) {
    const sUser: SellerUserDTO = request.body
    try {
      await this.useCase.handle(sUser)
      response.status(201).send()
    } catch (error) {
      if (error instanceof Error) {
        response.status(400).send({message: error.message || "Something happend"})
      }else{
        response.status(500).send({message: "Unexpected error"})
      }
    }
  }
}

export { CreateSellerUserController }