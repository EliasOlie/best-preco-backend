import { Router } from "express";
import { createBuyerUserCase ,createBuyerUserController } from "../domain/cases/BuyerUser/createBuyerUser";
import { readBuyerUserCase, readBuyerUserController } from "../domain/cases/BuyerUser/readBuyerUser";

const buyerUserRoute = Router()

buyerUserRoute.get("/", (req, res) => {
    res.send({message: "You are in buyer user route"})
})

buyerUserRoute.post("/create", (req, res) => {
    createBuyerUserController.run(req, res)
})

buyerUserRoute.get("/:email", (req, res) => {
    readBuyerUserController.run(req, res)
})

export { buyerUserRoute }