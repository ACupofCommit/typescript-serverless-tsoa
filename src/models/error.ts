export type ErrorCode =
    'UNKNOWN_SERVER_ERROR'
  | 'SERVER_NETWORK_ERROR'
  | 'AUTH_REQUIRE'
  | 'NO_PERMISSION'
  | 'REQUEST_VALIDATION_FAILED'

export const statusCodes: Record<ErrorCode, number> = {
  UNKNOWN_SERVER_ERROR: 500,
  SERVER_NETWORK_ERROR: 500,
  AUTH_REQUIRE: 401,
  NO_PERMISSION: 403,
  REQUEST_VALIDATION_FAILED: 422,
}

export class TSTError extends Error {
    code: ErrorCode
    detail: any
    constructor(code: ErrorCode, message: string, detail?: any) {
      super(message)
      this.name = 'TSTError'
      this.code = code
      this.detail = detail
    }
  }
