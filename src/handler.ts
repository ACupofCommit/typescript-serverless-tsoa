import { APIGatewayProxyHandler } from 'aws-lambda'
import { createServer, proxy } from  'aws-serverless-express'
import app from './app'
import 'source-map-support/register'

const server = createServer(app)
export const index: APIGatewayProxyHandler = (event, _context) => {
  proxy(server, event, _context)
}
