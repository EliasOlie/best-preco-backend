import { Request, Response } from "express";
import { ReadBuyerUserCase } from "./ReadBuyerUserCase";

class ReadBuyerUserController {
    constructor (
        private useCase: ReadBuyerUserCase 
    ) {}

    async run(request: Request, response: Response){
        const email:string = request.params.email

        try {
            const user = await this.useCase.handle(email)
            response.send(user)
        } catch (error) {
            if (error instanceof Error){
                response.status(404).send({message: "User not found"})
            }
            response.status(500).send({message: "Something went wrong :P"})
        }
    }
}

export { ReadBuyerUserController }