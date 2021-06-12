import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import routes from './routes/routes'

const app = express()
const port = 4000

mongoose
  .connect('mongodb://localhost/portfolio-auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('db connected'))
  .catch(err => console.log('there were errors', err))

app.use(cookieParser())
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
  })
)
app.use(express.json())
app.use('/api', routes)

app.listen(port, () => console.log(`server is on port http://localhost:${port}`))
