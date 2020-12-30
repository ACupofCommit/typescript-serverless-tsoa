import { EnvSlsStage } from "../types"

export interface Version {
  node: string
  app: string
  slsStage: EnvSlsStage
  AWS_REGION?: string
  AWS_LAMBDA_FUNCTION_NAME?: string
  AWS_LAMBDA_FUNCTION_MEMORY_SIZE?: string
  AWS_LAMBDA_FUNCTION_VERSION?: string
}
