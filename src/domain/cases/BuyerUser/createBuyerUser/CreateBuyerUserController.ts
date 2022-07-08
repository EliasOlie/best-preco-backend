import { Request, Response } from "express";
import { CreateBuyerUserCase } from "./CreateBuyerUserCase";

class CreateBuyerUserController {
  constructor(private useCase: CreateBuyerUserCase) {}

  async run(request: Request, response: Response) {
    const payload = request.body;

    try {
      await this.useCase.handle(payload);
      response.status(201).send();
    } catch (error) {
      if (error instanceof Error) {
        response.status(400).send({ message: error.message || "something happend" });
      } else response.status(500).send();
    }
  }
}

export { CreateBuyerUserController };
