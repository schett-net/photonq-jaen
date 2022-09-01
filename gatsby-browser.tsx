import {GatsbyBrowser} from 'gatsby'
import React from 'react'

import AuthProvider from './src/providers/AuthProvider'
import './src/styles/global.css'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props
}) => {
  return <AuthProvider path={props.path}>{element}</AuthProvider>
}
