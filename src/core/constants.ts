import { Envs } from "../types"

// The `as any` type assumption can be used only when the type check completion is guaranteed at build time.
// You can do this by adding a type checking codes to the `serverless.ts` file.
const envs: Envs = process.env as any
export const ENV_SLS_STAGE = envs.ENV_SLS_STAGE
export const ENV_REVISION = envs.ENV_REVISION

// Using AWS Lambda environment variables
// https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/configuration-envvars.html#configuration-envvars-runtime
export const AWS_REGION = process.env.AWS_REGION
export const AWS_LAMBDA_FUNCTION_NAME = process.env.AWS_LAMBDA_FUNCTION_NAME
export const AWS_LAMBDA_FUNCTION_MEMORY_SIZE = process.env.AWS_LAMBDA_FUNCTION_MEMORY_SIZE
export const AWS_LAMBDA_FUNCTION_VERSION = process.env.AWS_LAMBDA_FUNCTION_VERSION
