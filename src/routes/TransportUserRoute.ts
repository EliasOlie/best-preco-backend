import { Router } from "express";
import { createTransportUserController } from "../domain/cases/TransportUser/createTransportUser";
import { getAllController } from "../domain/cases/TransportUser/getAll";
import { readTransportUserController } from "../domain/cases/TransportUser/readTransportUser";
import { deleteTransportUserController } from "../domain/cases/TransportUser/deleteTransportUser";
import { changeTransportUserNameController } from "../domain/cases/TransportUser/changeTransportUserName";
import { changeTransportUserEmailController } from "../domain/cases/TransportUser/changeTransportUserEmail";
import { changeTransportUserPasswordController } from "../domain/cases/TransportUser/changeTranportUserPassword";
import { changeTransportUserCnhController } from "../domain/cases/TransportUser/changeTransportUserCnh";

const transportUserRoute = Router()

transportUserRoute.post("/create", (req, res) => {
  createTransportUserController.run(req, res)
})

transportUserRoute.get("/", (req, res) => {
  getAllController.run(req, res)
})

transportUserRoute.get("/:email", (req, res) => {
  readTransportUserController.run(req, res)
})

transportUserRoute.delete("/delete/:email", (req, res) => {
  deleteTransportUserController.run(req, res)
})

transportUserRoute.patch("/change/name", (req, res) => {
  changeTransportUserNameController.run(req, res)
})

transportUserRoute.patch("/change/email", (req, res) => {
  changeTransportUserEmailController.run(req, res)
})

transportUserRoute.patch("/change/password", (req, res) => {
  changeTransportUserPasswordController.run(req, res)
})

transportUserRoute.patch("/change/cnh", (req, res) => {
  changeTransportUserCnhController.run(req, res)
})

export { transportUserRoute }