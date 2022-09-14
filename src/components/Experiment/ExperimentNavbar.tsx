import {useLocation} from '@reach/router'
import clsx from 'clsx'
import React, {useMemo} from 'react'
import {useTranslation} from 'react-i18next'
import {getLangRootNavigationPath} from '../../common/getLangRootNavigationPath'

import {Path} from '../../model/model.routes'
import {ExperimentState} from '../../model/types/type.experiment'

import {Button} from '@mui/material'
import {Link, navigate} from 'gatsby'
import type {BaseEditorPageProps} from '../../pages/experiment'
import {getSearchParams} from '../../utils/queryParams'

interface EditorNavbarProps extends BaseEditorPageProps {
  reset: () => void
}

export default function ExperimentNavbar({
  experiment,
  isLoading,
  reset
}: EditorNavbarProps) {
  const {t} = useTranslation()
  const isResetButtonDisabled = useMemo(
    () => experiment.status !== ExperimentState.DRAFT || isLoading,
    [experiment, isLoading]
  )

  const type = getSearchParams()['type']
  const name = getSearchParams()['name']

  const location = typeof window !== 'undefined' ? useLocation() : null

  const isResult = useMemo(() => type === 'result', [type])

  return (
    <div className={'relative w-full text-white'}>
      <nav className={'absolute left-0 right-0 bg-secondaryDark py-4 px-8'}>
        <div className={'grid grid-cols-3 w-full'}>
          <div className={'flex items-center space-x-4 justify-self-start'}>
            <img
              className={'cursor-pointer'}
              onClick={() =>
                navigate(
                  getLangRootNavigationPath(location?.pathname, Path.MyProjects)
                )
              }
              src="/images/logo-white.png"
              alt="Logo of the university of vienna"
            />
            <h2 className={'text-xl font-bold transition duration-200'}>
              {isLoading ? '' : experiment.experimentName}
            </h2>
          </div>
          <div className={'flex space-x-4 items-center justify-center'}>
            <ExperimentLinkElement
              highlight={!isResult}
              path={`?id=${experiment.experimentId}`}
              text={'Editor'}
            />
            {experiment.status !== ExperimentState.DRAFT && (
              <ExperimentLinkElement
                highlight={isResult}
                path={`?type=result&id=${experiment.experimentId}`}
                disabled={experiment.experimentId === experiment.experimentName}
                text={'Result'}
              />
            )}
          </div>
          <div className={'flex justify-end items-center'}>
            <Button
              disabled={isResetButtonDisabled}
              variant={'outlined'}
              onClick={reset}>
              {t('Reset')}
            </Button>
          </div>
        </div>
      </nav>
    </div>
  )
}

/**
 *
 * @param highlight
 * @param id
 * @param text
 * @param path
 * @param disabled
 * @constructor
 */
function ExperimentLinkElement({
  highlight,
  text,
  path,
  disabled
}: {
  highlight: boolean
  text: string
  path: string
  disabled?: boolean
}) {
  const {t} = useTranslation()

  if (disabled) {
    return (
      <p
        className={clsx('text-lg', {
          'text-gray': disabled
        })}>
        {t(text)}
      </p>
    )
  }

  return (
    <Link to={path}>
      <p
        style={{textTransform: 'uppercase'}}
        className={clsx(
          'cursor-pointer text-lg duration-300 transform hover:underline',
          {
            'underline font-bold text-white': highlight,
            'text-primary': !highlight
          }
        )}>
        {t(text)}
      </p>
    </Link>
  )
}
