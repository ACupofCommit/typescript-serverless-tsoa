import * as express from 'express'
import * as awsServerlessExpressMiddleware from 'aws-serverless-express/middleware'
import * as bodyParser from 'body-parser'
import * as swaggerUi from "swagger-ui-express"
import { RegisterRoutes } from "./routes"
import { handle404NotFound, handleError } from './core/error-handler'

const app = express()
app.use(awsServerlessExpressMiddleware.eventContext())
app.use(bodyParser.urlencoded({ extended: true }))

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
