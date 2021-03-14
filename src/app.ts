import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as swaggerUi from "swagger-ui-express"
import { RegisterRoutes } from "./routes"
import { handle404NotFound, handleError } from './middlewares/error-handle.middleware'

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

if (process.env.TST_SLS_STAGE !== 'prod') {
  const swaggerJson = require("./swagger.json")
  app.use('/docs', swaggerUi.serveWithOptions({redirect: false}))
  app.get('/docs', swaggerUi.setup(swaggerJson))
}

app.use('/hello', (_req,res) => res.send('world'))
RegisterRoutes(app)

app.use(handle404NotFound)
app.use(handleError)

export default app
