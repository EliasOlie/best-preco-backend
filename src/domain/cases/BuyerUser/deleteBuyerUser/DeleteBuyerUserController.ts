import { Request, Response } from "express";
import { DeleteBuyerUserCase } from "./DeleteBuyerUserCase";

class DeleteBuyerUserController {
    constructor(
        private useCase: DeleteBuyerUserCase
    ){}

    async run(request: Request, response: Response){
        const email = request.body
        try {
            await this.useCase.handle(email)
            response.send()
        } catch (error) {
            response.status(500).send()
        }
    }
}

export { DeleteBuyerUserController }