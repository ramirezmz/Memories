import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import postRoutes from './routes/posts.js'

const app = express();
dotenv.config()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/posts', postRoutes)
const port = process.env.PORT
const password = process.env.PASSW

const CONNECTION_URL = `mongodb+srv://ramirezmz:${password}@cluster0.74njc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log(`Server running on port: http://localhost:${port}`)))
  .catch((error) => console.log(`${error} did not connect`));

