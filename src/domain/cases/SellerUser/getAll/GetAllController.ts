import { Request, Response } from "express";
import { GetAllCase } from "./GetAllCase";

class GetAllController {
  constructor(private useCase: GetAllCase){}

  async run(request: Request, response: Response) {
    try {
      response.status(200).send(await this.useCase.handle())
    } catch (error) {
      if (error instanceof Error) {
        response.status(400).send({message: error.message})
      }else{
        response.status(500).send()
      } 
    }
  }
}

export { GetAllController }