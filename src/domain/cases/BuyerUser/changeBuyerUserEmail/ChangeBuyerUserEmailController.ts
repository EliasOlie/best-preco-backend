import { Request, Response } from "express";
import { ChangeBuyerUserEmailCase } from "./ChangeBuyerUserEmailCase";

class ChangeBuyerUserEmailController {
  constructor(
    private buyerUserCase: ChangeBuyerUserEmailCase
  ){}

  async run(request: Request, response: Response){
    const { email, newEmail } = request.body
    try {
      await this.buyerUserCase.handle(email, newEmail)
      response.send()
    } catch (error) {
      if(error instanceof Error) {
        response.status(400).send({message: error.message})
      }else{
        response.status(500).send({message: error || "Unexpected Error"})
      }
    }
  }
}

export { ChangeBuyerUserEmailController }