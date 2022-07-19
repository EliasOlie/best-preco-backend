import { Request, Response } from "express";
import { ChangeTransportUserNameCase } from "./ChangeTransportUserNameCase";

class ChangeTransportUserNameController {
  constructor(private useCase: ChangeTransportUserNameCase) {}

  async run(request: Request, response: Response){
    const {email, newName} = request.body
    
    try {
      await this.useCase.handle(email, newName)  
      response.send()
    } catch (error) {
      if(error instanceof Error) {
        response.status(400).send({message: error.message})
      }else{
        response.status(500).send({message: "Something happend"})
      }
    }
  }
}

export { ChangeTransportUserNameController }