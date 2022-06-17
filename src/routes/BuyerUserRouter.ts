import { Router } from "express";
import { createBuyerUserCase ,createBuyerUserController } from "../domain/cases/BuyerUser/createBuyerUser";
import { readBuyerUserCase, readBuyerUserController } from "../domain/cases/BuyerUser/readBuyerUser";
import { getAllCase, getAllController } from "../domain/cases/BuyerUser/getAll";
import { deleteBuyerUserCase, deleteBuyerUserController } from "../domain/cases/BuyerUser/deleteBuyerUser";
import { changeNameController } from "../domain/cases/BuyerUser/changeBuyerUserName";

const buyerUserRoute = Router()

buyerUserRoute.get("/", (req, res) => {
    getAllController.run(req, res)
})

buyerUserRoute.post("/create", (req, res) => {
    createBuyerUserController.run(req, res)
})

buyerUserRoute.get("/:email", (req, res) => {
    readBuyerUserController.run(req, res)
})

buyerUserRoute.delete("/delete", (req, res) => {
    deleteBuyerUserController.run(req, res)
})

buyerUserRoute.patch("/changename", (req, res) => {
    changeNameController.run(req, res)
})

export { buyerUserRoute }