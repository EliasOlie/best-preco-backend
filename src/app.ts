import express from "express"
import { buyerUserRoute } from "./routes/BuyerUserRouter"
import { sellerUserRoute } from "./routes/SellerUserRouter"
import { transportUserRoute } from "./routes/TransportUserRoute"

const app = express()
app.disable("x-powered-by")

app.use(express.json())
app.use("/buyer/users", buyerUserRoute)
app.use("/seller/users", sellerUserRoute)
app.use("/transport/users", transportUserRoute)

app.get("/", (_req, res) => {
    res.send({message: "Okay"})
})

export { app }