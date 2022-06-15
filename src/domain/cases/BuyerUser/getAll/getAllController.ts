import { Request, Response } from "express";
import { GetAllCase } from "./getAllCase";

class GetAllController {
    constructor(
        private useCase: GetAllCase
    ){}

    async run(request: Request, response: Response){
        const allUsers = await this.useCase.handle()
        
        if (allUsers){
            response.send(allUsers)
        }else{
            response.status(500).send({message: "Something is broken :/"})
        }
    }
}

export { GetAllController }