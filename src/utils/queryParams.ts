import queryString from 'query-string'
import { useEffect, useState } from 'react'

const getSearchParams = <T extends object>(): T => {
  const [searchParams, setSearch] = useState<T>({} as T)
  const inBrowser = typeof document !== 'undefined'

  useEffect(
    () => {
      if (inBrowser) {
        setSearch(
          (document.location.search
            ? queryString.parse(document.location.search)
            : {}) as T
        )
      }
    },
    inBrowser ? [document.location.search] : []
  )

  return searchParams
}

const useQueryParam = (key: string | number, defaultState: any) => {
  const searchParams = getSearchParams()
  return searchParams[key]
    ? searchParams[key]
    : defaultState
    ? defaultState
    : null
}

export { getSearchParams, useQueryParam }

