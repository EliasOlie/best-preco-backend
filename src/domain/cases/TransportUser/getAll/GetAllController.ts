import { Request, Response } from "express";
import { GetAllCase } from "./GetAllCase";

class GetAllController {
  constructor(private useCase: GetAllCase) {}

  async run(request: Request, response: Response) {
    const users = await this.useCase.handle()

    response.send(users)
  }
}

export { GetAllController }