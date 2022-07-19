import { Request, Response } from "express";
import { ChangeTransportUserCnhCase } from "./ChangeTransportUserCnhCase";

class ChangeTransportUserCnhController {
  constructor(private useCase: ChangeTransportUserCnhCase){}

  async run(request: Request, response: Response) {
    const { email, newCnh } = request.body 
    
    try {
      await this.useCase.handle(email, newCnh)
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

export { ChangeTransportUserCnhController }