import { Controller, Delete, Get, Path, Request, Route, Security } from "@tsoa/runtime"
import { TSTError } from "../models/error.model"
import { UsersService } from "../services/users.service"
import { ResDelete, ResItem, ResList } from "../types/res.type"
import { ExRequestWithUser, User } from "../types/users.type"

@Route("/users")
export class UsersController extends Controller {
  /**
   * Get Users list
   */
  @Get()
  @Security("bearerAuth", ['users:list'])
  public async list(): Promise<ResList<User>> {
    const items = await new UsersService().list()
    return { ok: true, items }
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
  ): Promise<ResItem<User>> {
    const item = await new UsersService().get(userId)
    if (!item) throw new TSTError('RESOURCE_NOT_FOUND', 'Not found user by userId: ' + userId)

    return {ok: true, item}
  }

  @Delete("/{userId}")
  @Security("bearerAuth", ['users:delete'])
  public async delete(
    @Path() userId: string,
    @Request() req: ExRequestWithUser,
  ): Promise<ResDelete> {
    if (req.user.id !== userId) throw new TSTError('NO_PERMISSION', 'Can not delete other user')

    await new UsersService().delete(userId)
    return { ok: true }
  }

  @Delete("/byAdmin/{userId}")
  @Security("bearerAuth", ['admin'])
  public async deleteByAdmin(
    @Path() userId: string,
  ): Promise<ResDelete> {
    await new UsersService().delete(userId)
    return { ok: true }
  }
}
