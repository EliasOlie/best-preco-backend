import { Request, Response } from "express"
import { ChangeBuyerUserPasswordCase } from "./ChangeBuyerUserPasswordCase"

class ChangeBuyerUserPasswordController {
  constructor(
    private changePasswordCase: ChangeBuyerUserPasswordCase 
  ){}

  async run(request: Request, response: Response) {
    const { email, newPassword } = request.body

    try {
      await this.changePasswordCase.handle(email, newPassword)
      response.send()
    } catch (error) {
      if (error instanceof Error) {
        response.status(400).send({message: error.message})
      }else{
        response.status(500).send()
      }
    }

  }
}

export { ChangeBuyerUserPasswordController }