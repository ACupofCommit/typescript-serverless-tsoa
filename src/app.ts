import * as express from 'express'
import * as awsServerlessExpressMiddleware from 'aws-serverless-express/middleware'
import * as bodyParser from 'body-parser'
import { RegisterRoutes } from "./routes"
import { handle404NotFound, handleError } from './core/error-handler'

const app = express()
app.use(awsServerlessExpressMiddleware.eventContext())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/hello', (req,res) => res.send('world'))
RegisterRoutes(app);

app.use(handle404NotFound)
app.use(handleError)

export default app