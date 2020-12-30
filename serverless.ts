import type { AWS } from '@serverless/typescript'
import { Envs, isEnvSlsStage, isNotEmptyString} from './src/types'

const {
  ENV_SLS_STAGE, ENV_REVISION,
} = process.env

// Through the build-time type check here,
// environment variables can be used in runtime code without additional type checking.
if(!isEnvSlsStage(ENV_SLS_STAGE)) throw new Error('Check required env: ENV_SLS_STAGE')
if(!isNotEmptyString(ENV_REVISION)) throw new Error('Check required env: ENV_REVISION')

const envs: Envs = {
  ENV_SLS_STAGE, ENV_REVISION,
}

const serverlessConfiguration: AWS = {
  service: 'typescript-serverless-tsoa',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true
    }
  },
  // Add the serverless-webpack plugin
  plugins: [
    'serverless-webpack',
    'serverless-offline',
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    stage: '${env:ENV_SLS_STAGE, "local"}',
    apiGateway: {
      shouldStartNameWithService: true,
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      ...envs,
    },
  },
  functions: {
    hello: {
      handler: 'src/handler.index',
      events: [
        ...['post','get','put','delete'].map(method => ({
          http: { method, path: '/{pathname+}' }
        })),
      ],
    }
  }
}

module.exports = serverlessConfiguration
