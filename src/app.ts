import express from "express"
import { buyerUserRoute } from "./routes/BuyerUserRouter"
import { sellerUserRoute } from "./routes/SellerUserRouter"
import { transportUserRoute } from "./routes/TransportUserRoute"
import { dbConnectSellerUser, dbConnectBuyerUser, dbConnectTransportUser } from "./dbal/mongo.service"

dbConnectBuyerUser().catch((err) => {
    console.log(err)
})

dbConnectSellerUser().catch((err) => {
    console.log(err)
})

dbConnectTransportUser().catch((err) => {
    console.log(err)
})


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