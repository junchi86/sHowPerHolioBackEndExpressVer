import app from "./index"
import './db'
import './models/User'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT
const firstLogger = () => { console.log(`server is running on http://localhost:${PORT}`) }

app.listen(PORT, firstLogger())