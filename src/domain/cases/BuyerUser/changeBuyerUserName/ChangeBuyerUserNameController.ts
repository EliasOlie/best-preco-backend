import { Request, Response } from "express";
import { ChangeBuyerUserNameCase } from "./ChangeBuyerUserNameCase";

class ChangeBuyerUserNameController {
  constructor(private changeNameCase: ChangeBuyerUserNameCase) {}

  async run(request: Request, response: Response) {
    const { email, newName } = request.body;

    try {
      await this.changeNameCase.handle(email, newName);
      response.send();
    } catch (error) {
      if (error instanceof Error) {
        response.status(404).send({ message: error.message });
      } else {
        response.status(500).send({ error: error });
      }
    }
  }
}

export { ChangeBuyerUserNameController };
