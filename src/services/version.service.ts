import { AWS_REGION, AWS_LAMBDA_FUNCTION_NAME, AWS_LAMBDA_FUNCTION_MEMORY_SIZE, AWS_LAMBDA_FUNCTION_VERSION, ENV_REVISION, ENV_SLS_STAGE } from "../helpers/constants.helper"
import { Version } from "../models/version.model"

export class VersionService {
  public get(): Version {
    return {
      node: process.version,
      app: ENV_REVISION,         // application revision
      slsStage: ENV_SLS_STAGE,   // serverless stage
      AWS_REGION: AWS_REGION,
      AWS_LAMBDA_FUNCTION_NAME: AWS_LAMBDA_FUNCTION_NAME,
      AWS_LAMBDA_FUNCTION_MEMORY_SIZE: AWS_LAMBDA_FUNCTION_MEMORY_SIZE,
      AWS_LAMBDA_FUNCTION_VERSION: AWS_LAMBDA_FUNCTION_VERSION,
    }
  }
}
