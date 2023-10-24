import express from "express"
import path from 'path'
import cors from 'cors'
import bodyParser from "body-parser"
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import { connectDB } from "./database/db.js"
import bookRoute from './node-backend/routes/book.route.js'
import { err, errorHandler, notFound } from "./middlewares/error.js";

connectDB()
const app = express()

app.use(express.json())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(cors())

app.use(express.static(path.join(__dirname, 'dist/Bookstore')))

app.use('/api', bookRoute)

app.use(notFound)

app.use('/',err)

app.use('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/Bookstore/index.html'))
})

app.use(errorHandler)

app.listen(3000, () => {
    console.log(`start at http://localhost:${3000}`)
})