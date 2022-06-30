import { Request, Response } from "express";
import { DeleteBuyerUserCase } from "./DeleteBuyerUserCase";

class DeleteBuyerUserController {
    constructor(
        private useCase: DeleteBuyerUserCase
    ){}

    async run(request: Request, response: Response){
        const payload = request.body
        try {
            await this.useCase.handle(payload.email)
            response.send()
        } catch (error) {
            if(error instanceof Error) {
                response.status(400).send({message: error.message})
            }else{

                response.status(500).send()
            }
        }
    }
}

export { DeleteBuyerUserController }