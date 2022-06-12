import { Router } from "express";
import { createBuyerUserController } from "../domain/cases/BuyerUser/createBuyerUser/index";

const buyerUserRoute = Router()

buyerUserRoute.get("/", (req, res) => {
    res.send({message: "You are in buyer user route"})
})

buyerUserRoute.post("/create", (req, res) => {
    createBuyerUserController.run(req, res)
})

export { buyerUserRoute }