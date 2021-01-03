import { getAllUsers, getUserById } from "../models/users.model"
import { User } from "../types/users.type"

export class UsersService {
  public async list(): Promise<User[]> {
    return await getAllUsers()
  }

  public async get(id: string): Promise<User | void> {
    const user = await getUserById(id)
    return user
  }

  public async delete(_id: string): Promise<void> {
    // TODO: implement
  }
}
