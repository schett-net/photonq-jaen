enum SUPPORTED_LANGUAGES {
  en = 'en',
  fr = 'fr',
  es = 'es',
  de = 'de',
  it = 'it'
}

export const checkLanguage = (path: string | undefined): string | boolean => {
  if (!path) {
    return false
  }

  const pathWithoutTrailingSlash = path.replace(/\/$/, '')

  // Get the language from the path
  const lang = pathWithoutTrailingSlash.split('/')[1] as SUPPORTED_LANGUAGES

  // If the language is not supported, return the nextPath
  if (Object.values(SUPPORTED_LANGUAGES).includes(lang)) {
    return lang
  }

  return false
}

export const getLangRootNavigationPath = (
  path: string | undefined,
  nextPath: string
) => {
  const lang = checkLanguage(path)

  // If the language is not supported, return the nextPath
  if (lang) {
    return `/${lang}${nextPath}`
  } else {
    return nextPath
  }
}
