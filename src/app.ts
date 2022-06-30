import express from "express"
import { buyerUserRoute } from "./routes/BuyerUserRouter"

const app = express()
app.use(express.json())
app.use("/buyer/users", buyerUserRoute)

app.get("/", (req, res) => {
    res.send({message: "Okay"})
})

export { app }