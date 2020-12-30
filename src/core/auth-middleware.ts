import { Request as ExRequest } from "express"
import { intersection } from "lodash"
import { TSTError } from "../models/error"
import { User } from "../models/user"
import { UsersService } from "../services/users-service"

export async function expressAuthentication(
  req: ExRequest,
  securityName: string,
  scopes: string[]=[],
): Promise<User> {
  if (securityName !== "bearerAuth") throw new TSTError('UNKNOWN_SERVER_ERROR', 'Unknown securityName in ' + req.path)

  const [authType, accessToken, ...rest] = req.headers.authorization?.split(' ') || []
  if (authType !== 'Bearer' || !accessToken || rest.length > 0) {
    throw new TSTError('AUTH_REQUIRE', `Set authorization header like "Bearer <accessToken>"`)
  }

  // TODO: Add your authentication codes.
  // For the example, it use accessToken as userId
  const user = await new UsersService().get(accessToken)
  if (!user) throw new TSTError('AUTH_REQUIRE', 'Not found user')

  if (intersection(scopes, user.scopes).length !== scopes.length) {
    throw new TSTError('NO_PERMISSION', `No permission for [${scopes.join(',')}]`)
  }

  return user
}
