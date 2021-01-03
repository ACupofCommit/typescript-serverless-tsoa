import * as tg from "generic-type-guard"
import { isUser, User } from "../types/users.type"
import { TSTError } from "./error.model"

const exampleDBDatas: any[] = [
  {id:'user.a', email: 'user.a@example.com', scopes: ['users:read','users:delete']},
  {id:'user.b', email: 'user.b@example.com', scopes: ['users:read','users:delete']},
  {id:'user.c', email: 'user.c@example.com', scopes: ['users:read','users:delete']},
]

export const getUserById = async (id: string): Promise<User | void> => {
  const user = exampleDBDatas.find(u => u.id === id)
  if (!user) return void 0
  if (!isUser(user)) throw new TSTError('UNKNOWN_SERVER_ERROR', 'Wrong User type')

  return user
}

export const getAllUsers = async (): Promise<User[]> => {
  if (!tg.isArray(isUser)(exampleDBDatas)) throw new TSTError('UNKNOWN_SERVER_ERROR','Wrong User[] type')

  return exampleDBDatas
}
