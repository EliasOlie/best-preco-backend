import { Router } from "express";
import { createSellerUserController } from "../domain/cases/SellerUser/createSellerUser";
import { getAllController } from "../domain/cases/SellerUser/getAll";
import { readSellerUserController } from "../domain/cases/SellerUser/readSellerUser";
import { deleteSellerUserController } from "../domain/cases/SellerUser/deleteSellerUser";
import { changeSellerUserCnpjController } from "../domain/cases/SellerUser/changeSellerUserCnpj";
import { changeSellerUserNameController } from "../domain/cases/SellerUser/changeSellerUserName";
import { changeSellerUserEmailController } from "../domain/cases/SellerUser/changeSellerUserEmail";
import { changeSellerUserPasswordController } from "../domain/cases/SellerUser/changeSellerUserPassword";

const sellerUserRoute = Router()

sellerUserRoute.get("/", (req, res) => {
  getAllController.run(req, res)
})

sellerUserRoute.post("/create", (req, res) => {
  createSellerUserController.run(req, res)
})

sellerUserRoute.get("/:email", (req, res) => {
  readSellerUserController.run(req, res)
})

sellerUserRoute.delete("/delete/:email", (req, res) => {
  deleteSellerUserController.run(req, res)
})

sellerUserRoute.patch("/change/cnpj", (req, res) => {
  changeSellerUserCnpjController.run(req, res)
})

sellerUserRoute.patch("/change/name", (req, res) => {
  changeSellerUserNameController.run(req, res)
})

sellerUserRoute.patch("/change/email", (req, res) => {
  changeSellerUserEmailController.run(req, res)
})

sellerUserRoute.patch("/change/password", (req, res) => {
  changeSellerUserPasswordController.run(req, res)
})

export { sellerUserRoute }