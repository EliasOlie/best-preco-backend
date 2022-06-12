import express from "express"
import { BaseUser } from "./domain/models/BaseUser"

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    let today: any = Date()

    let userDTO = {
        id: "123",
        userName: "Elias",
        userEmail: "a@b",
        userPassword: "123",
        createdAt: today,
        modifiedAt: today
    }
    const User = new BaseUser(userDTO)
    res.send({message: userDTO})
})

export { app }