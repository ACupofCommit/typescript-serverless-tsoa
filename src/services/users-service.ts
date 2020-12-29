import { User } from "../models/user"

const exampleUsers: User[] = [
  {id:'user.a', email: 'user.a@example.com', scopes: ['users:read','users:delete']},
  {id:'user.b', email: 'user.b@example.com', scopes: ['users:read','users:delete']},
  {id:'user.c', email: 'user.c@example.com', scopes: ['users:read','users:delete']},
]

export class UsersService {
  public async list(): Promise<User[]> {
    return exampleUsers
  }

  public async get(id: string): Promise<User | void> {
    return exampleUsers.find(u => u.id === id)
  }

  public async delete(_id: string): Promise<void> {
    // TODO: implement
  }
}
