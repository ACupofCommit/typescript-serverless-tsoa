import * as tg from "generic-type-guard"
import { Request as ExRequest } from 'express'
import { isNotEmptyString, isNotNullObject } from '../utils/typecheck.util'

export interface User {
  id: string
  email: string
  scopes: string[]
}

export const isUser = (o: unknown): o is User => {
  const maybe = o as User
  const isValidType = isNotNullObject(maybe)
    && isNotEmptyString(maybe.id)
    && isNotEmptyString(maybe.email)
    && tg.isArray(isNotEmptyString)(maybe.scopes)

  return isValidType
}

export interface ExRequestWithUser extends ExRequest {
  user: User
}
