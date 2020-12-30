export type EnvSlsStage = 'local' | 'dev' | 'stg' | 'prod'
export const isEnvSlsStage = (o: any): o is EnvSlsStage =>
  ['local','dev','stg','prod'].includes(o)

export interface Envs {
  ENV_SLS_STAGE: EnvSlsStage
  ENV_REVISION: string
}

export const isNotEmptyString = (s: any): s is string => {
  return !!(typeof s === 'string' && s)
}

export const isNotNullObject = (o: any) => {
  return !!(typeof o === 'object' && o !== null)
}
