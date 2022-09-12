import {User} from './type.user'

export interface LoginCredentials {
  username: string
  password: string
}

/**
 *
 */
export interface RegisterCredentials {
  email: string
  password: string
  firstName: string
  lastName: string
}

/**
 * Response returned by the server after a successful login.
 */
export interface LoginResponse {
  user: User
}
