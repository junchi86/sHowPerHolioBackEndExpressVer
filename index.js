import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import passport from 'passport'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import routes from './routes'
import session from 'express-session'
import globalRouter from './routers/globalRouter'
import MongoStore from 'connect-mongo'
import Mongoose from 'mongoose'
import helmet from 'helmet'
import './passport'

const app = express()
const cookieStore = MongoStore(session)
dotenv.config()

app.use(helmet())
app.use(cors({
    origin: true,
    credentials: true,
}))
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: { httpOnly: true, secure: false },
    name: 'glidelinss',
    store: new cookieStore({ mongooseConnection: Mongoose.connection })
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(routes.home, globalRouter)

export default app;