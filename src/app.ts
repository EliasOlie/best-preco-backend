import express from "express"
import { buyerUserRoute } from "./routes/BuyerUserRouter"
import { sellerUserRoute } from "./routes/SellerUserRouter"

const app = express()
app.disable("x-powered-by")

app.use(express.json())
app.use("/buyer/users", buyerUserRoute)
app.use("/seller/users", sellerUserRoute)

app.get("/", (_req, res) => {
    res.send({message: "Okay"})
})

export { app }