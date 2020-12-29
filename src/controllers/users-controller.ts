import { Controller, Delete, Get, Path, Request, Route, Security } from "tsoa"
import { TSTError } from "../models/error"
import { ExRequestWithUser, User } from "../models/user"
import { UsersService } from "../services/users-service"

@Route("/users")
export class UsersController extends Controller {
  /**
   * Get Users list
   */
  @Get("/")
  @Security("bearerAuth", ['users:list'])
  public async list(): Promise<User[]> {
    return await new UsersService().list()
  }

  /**
   * Get current logged-in User
   */
  @Get("/me")
  @Security("bearerAuth", ['users:read'])
  public async getMe(
    @Request() req: ExRequestWithUser,
  ): Promise<User> {
    return req.user
  }

  /**
   * Get User by specific userId
   * @param userId
   * @example userId "user.a"
   */
  @Get("/{userId}")
  @Security("bearerAuth", ['users:read'])
  public async get(
    @Path() userId: string,
  ): Promise<User | void> {
    return await new UsersService().get(userId)
  }

  @Delete("/{userId}")
  @Security("bearerAuth", ['users:delete'])
  public async delete(
    @Path() userId: string,
    @Request() req: ExRequestWithUser,
  ): Promise<{ok: boolean}> {
    if (req.user.id !== userId) throw new TSTError('NO_PERMISSION', 'Can not delete other user')

    await new UsersService().delete(userId)
    return { ok: true }
  }

  @Delete("/byAdmin/{userId}")
  @Security("bearerAuth", ['admin'])
  public async deleteByAdmin(
    @Path() userId: string,
  ): Promise<{ok: boolean}> {
    await new UsersService().delete(userId)
    return { ok: true }
  }
}
