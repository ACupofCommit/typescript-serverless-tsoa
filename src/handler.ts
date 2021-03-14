import serverlessExpress from '@vendia/serverless-express'
import app from './app'
import 'source-map-support/register'

export const index = serverlessExpress({ app })
