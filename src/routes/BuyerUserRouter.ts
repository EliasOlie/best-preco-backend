import { Router } from "express";
import { createBuyerUserController } from "../domain/cases/BuyerUser/createBuyerUser";
import { readBuyerUserController } from "../domain/cases/BuyerUser/readBuyerUser";
import { getAllController } from "../domain/cases/BuyerUser/getAll";
import { deleteBuyerUserController } from "../domain/cases/BuyerUser/deleteBuyerUser";
import { changeBuyerUserNameController } from "../domain/cases/BuyerUser/changeBuyerUserName";
import { changeBuyerUserEmailController } from "../domain/cases/BuyerUser/changeBuyerUserEmail";
import { changeBuyerUserPasswordController } from "../domain/cases/BuyerUser/changeBuyerUserPassword";

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

buyerUserRoute.patch("/change/name", (req, res) => {
    changeBuyerUserNameController.run(req, res)
})

buyerUserRoute.patch("/change/email", (req, res) => {
    changeBuyerUserEmailController.run(req, res)
})

buyerUserRoute.patch("/change/password", (req, res) => {
    changeBuyerUserPasswordController.run(req, res)
})

export { buyerUserRoute }