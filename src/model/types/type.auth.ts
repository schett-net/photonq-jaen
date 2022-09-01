import {User} from './type.user'

export interface LoginCredentials {
  username: string
  password: string
}

/**
 *
 */
export interface RegisterCredentials {
  name: string
  email: string
  password: string
}

/**
 * Response returned by the server after a successful login.
 */
export interface LoginResponse {
  user: User
}
