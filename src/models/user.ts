import { Request as ExRequest } from 'express'

export interface User {
  id: string
  email: string
  scopes: string[]
}

export interface ExRequestWithUser extends ExRequest {
  user: User
}
