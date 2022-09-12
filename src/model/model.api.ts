import {jsonFetch, login, logout, signup} from '@snek-functions/origin'

import {
  BaseApiFetchPayload,
  BASE_ENDPOINT_URL,
  Endpoint,
  GetExperimentResponse,
  Method
} from './types/type.api'
import {LoginCredentials, RegisterCredentials} from './types/type.auth'
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
  body
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

  const response = await jsonFetch([url, JSON.stringify(init)])

  console.log('response', response)

  return response

  // return fetch(`${BASE_ENDPOINT_URL}${endpoint}${params ? '/' + params : ''}`)
}

/**
 *
 * @param id
 */
export async function getExperiment(
  id: string
): Promise<GetExperimentResponse> {
  const response = await baseApiFetch({
    method: Method.GET,
    params: id,
    endpoint: Endpoint.Experiment
  })
  if (!response.ok) throw new Error('Could not get Experiment ' + id)
  return response.json
}

/**
 *
 * @param id
 */
export async function getExperimentResult(id: string): Promise<any> {
  const response = await baseApiFetch({
    method: Method.GET,
    params: `${id}/results`,
    endpoint: Endpoint.Experiment
  })
  if (!response.ok)
    throw new Error('Could not get full Experiment results' + id)
  return response.json
}

/**
 *
 */
export async function getExperiments(): Promise<ExperimentResolution[]> {
  const response = await baseApiFetch({
    method: Method.GET,
    endpoint: Endpoint.Experiments
  })
  if (!response.ok) throw new Error('Could not get Experiments')
  return response.json
}

/**
 *
 * @param id
 * @param newExperiment
 */
export async function updateExperiment(
  id: string,
  newExperiment: CreateExperimentPayload
): Promise<ExperimentResolution> {
  await deleteExperiment(id)
  return createExperiment(newExperiment)
}

/**
 *
 * @param id
 */
export async function deleteExperiment(id: string) {
  const response = await baseApiFetch({
    method: Method.DELETE,
    params: id,
    endpoint: Endpoint.Experiment
  })
  if (!response.ok) throw new Error('Could not delete Experiment: ' + id)
  return response
}

/**
 *
 * @param experimentPayload
 */
export async function createExperiment(
  experimentPayload: CreateExperimentPayload
): Promise<ExperimentResolution> {
  const response = await baseApiFetch<CreateExperimentPayload>({
    method: Method.POST,
    endpoint: Endpoint.Experiment,
    body: experimentPayload
  })
  if (!response.ok) {
    throw new Error('Could not create Experiment: ' + experimentPayload)
  }
  return response.json
}

/**
 *
 * @param credentials
 */
export async function loginWthUserNameAndPassword(
  credentials: LoginCredentials
) {
  await login({
    username: credentials.username,
    password: credentials.password
  })
}

export async function logoutUser() {
  await logout()
}

/**
 *
 * @param credentials
 */
export async function register(credentials: RegisterCredentials) {
  await signup({
    email: credentials.email,
    password: credentials.password,
    details: {firstName: credentials.firstName, lastName: credentials.lastName}
  })
}
