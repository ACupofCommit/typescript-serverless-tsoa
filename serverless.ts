import type { AWS } from '@serverless/typescript';

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
    stage: '${opt:stage, "local"}',
    apiGateway: {
      shouldStartNameWithService: true,
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
  },
  functions: {
    hello: {
      handler: 'src/handler.index',
      events: [
        {
          http: {
            method: 'get',
            path: '/{pathname+}'
          }
        }
      ]
    }
  }
}

module.exports = serverlessConfiguration;
