import { app } from "./app"
import "dotenv/config"

const PORT = process.env.PORT? parseInt(process.env.PORT) : 3000
const HOST="0.0.0.0"

app.listen(PORT, HOST, () => console.log(`server running at http://localhost:${PORT}`));