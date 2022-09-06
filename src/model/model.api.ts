import {login, logout, jsonFetch} from '@snek-functions/origin'

import {
  BaseApiFetchPayload,
  BASE_ENDPOINT_URL,
  Endpoint,
  GetExperimentResponse,
  Method
} from './types/type.api'
import {
  LoginCredentials,
  LoginResponse,
  RegisterCredentials
} from './types/type.auth'
import {
  CreateExperimentPayload,
  ExperimentResolution
} from './types/type.experiment'

/**
 *
 * @param params
 * @param method
 * @param endpoint
 * @param stringifiedBody
 */
async function baseApiFetch<T>({
  params,
  method,
  endpoint,
  body,
  token
}: BaseApiFetchPayload<T>) {
  const url = `${BASE_ENDPOINT_URL}${endpoint}${params ? '/' + params : ''}`
  const init = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNjYyNDQ1MTQzLCJleHAiOjE2NjI0NDU0NDMsImF1ZCI6IiIsImlzcyI6InNuZWstMCIsInN1YiI6IjEiLCJqdGkiOiI2NDk2MGQ1Yi1iMmVlLTQyNTctYTk5NC1iNTFmNDlmYTliN2YifQ.GHghLa0cEfICoYnLSfQab4vaHAZvx7t998EIO5OES34`
    },
    method,
    body: JSON.stringify(body)
  }

  //return jsonFetch([url, init])

  return fetch(`${BASE_ENDPOINT_URL}${endpoint}${params ? '/' + params : ''}`)
}

/**
 *
 * @param id
 * @param token
 */
export async function getExperiment(
  id: string,
  token: string
): Promise<GetExperimentResponse> {
  const response = await baseApiFetch({
    method: Method.GET,
    params: id,
    endpoint: Endpoint.Experiment,
    token
  })
  if (!response.ok) throw new Error('Could not get Experiment ' + id)
  return response.json()
}

/**
 *
 * @param id
 * @param token
 */
export async function getExperimentResult(
  id: string,
  token: string
): Promise<any> {
  const response = await baseApiFetch({
    method: Method.GET,
    params: `${id}/results`,
    endpoint: Endpoint.Experiment,
    token
  })
  if (!response.ok)
    throw new Error('Could not get full Experiment results' + id)
  return response.json()
}

/**
 *
 */
export async function getExperiments(
  token: string
): Promise<ExperimentResolution[]> {
  const response = await baseApiFetch({
    method: Method.GET,
    endpoint: Endpoint.Experiments,
    token
  })
  if (!response.ok) throw new Error('Could not get Experiments')
  return response.json()
}

/**
 *
 * @param id
 * @param newExperiment
 * @param token
 */
export async function updateExperiment(
  id: string,
  newExperiment: CreateExperimentPayload,
  token: string
): Promise<ExperimentResolution> {
  await deleteExperiment(id, token)
  return createExperiment(newExperiment, token)
}

/**
 *
 * @param id
 * @param token
 */
export async function deleteExperiment(id: string, token: string) {
  const response = await baseApiFetch({
    method: Method.DELETE,
    params: id,
    endpoint: Endpoint.Experiment,
    token
  })
  if (!response.ok) throw new Error('Could not delete Experiment: ' + id)
  return response
}

/**
 *
 * @param experimentPayload
 * @param token
 */
export async function createExperiment(
  experimentPayload: CreateExperimentPayload,
  token: string
): Promise<ExperimentResolution> {
  const response = await baseApiFetch<CreateExperimentPayload>({
    method: Method.POST,
    endpoint: Endpoint.Experiment,
    body: experimentPayload,
    token
  })
  if (!response.ok) {
    throw new Error('Could not create Experiment: ' + experimentPayload)
  }
  return response.json()
}

/**
 *
 * @param credentials
 */
export async function loginWthUserNameAndPassword(
  credentials: LoginCredentials
): Promise<LoginResponse> {
  const {data, errors} = await login.execute({
    username: 'cis.co',
    password: credentials.password
  })

  if (errors.length > 0) throw new Error(errors[0].message)

  return {
    user: {
      id: '1234',
      username: 'Test-User',
      name: 'The Test User',
      email: 'snekman@snek.at'
    }
  }
}

export async function logoutUser() {
  await logout()
}

/**
 *
 * @param credentials
 */
export async function register(
  credentials: RegisterCredentials
): Promise<LoginResponse> {
  const response = await baseApiFetch({
    method: Method.POST,
    endpoint: Endpoint.Register,
    body: credentials
  })
  if (!(response.status === 200 || response.status === 201)) {
    if (response.status === 400) {
      throw new Error('User with this email already exists.')
    } else {
      throw new Error('Authorization data missing or invalid.')
    }
  }
  return response.json()
}
