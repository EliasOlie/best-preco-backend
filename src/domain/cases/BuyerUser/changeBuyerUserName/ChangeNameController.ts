import { Request, Response } from "express";
import { ChangeNameCase } from "./ChangeNameCase";

interface IChangePayload {
    email: string
    newName: string
}

class ChangeNameController {
    constructor(
        private changeNameCase: ChangeNameCase
    ){}

    async run(request: Request, response: Response){
        const changePayload:IChangePayload = request.body

        try {
            await this.changeNameCase.handle(changePayload.email, changePayload.newName)
            response.send()
        } catch (error) {
            if (error instanceof Error){
                response.status(404).send({message: error.message})
            }else{
                response.status(500).send({error: error})
            }
        }
    }
}

export { ChangeNameController }