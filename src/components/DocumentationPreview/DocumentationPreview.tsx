import {Field, navigate} from '@jaenjs/jaen'

import {Button} from '@mui/material'
import {useLocation} from '@reach/router'
import React from 'react'
import {
  checkLanguage,
  getLangRootNavigationPath
} from '../../common/getLangRootNavigationPath'
import {useGuideFilter} from '../GuideFilter/hook.guideFilter'
import GuidePreview from './GuidePreview'
import {GuidePreviewGrid} from './GuidePreviewGrid'

export default function DocumentationPreview() {
  const location = typeof window !== 'undefined' ? useLocation() : null

  const jaenPagePath = React.useMemo(() => {
    const lang = checkLanguage(location?.pathname)

    if (lang) {
      return `/${lang}/how-to-guides`
    }

    return `/how-to-guides`
  }, [location?.pathname])

  const {filteredGuides, withJaenPage} = useGuideFilter({
    path: jaenPagePath
  })

  return (
    <div className={'flex flex-col items-center space-y-5 text-xl'}>
      <h3 className={'text-3xl font-bold'}>
        <Field.Text
          name="docsHeadline"
          defaultValue="Documentation & How-To-Guides"
        />
      </h3>
      <div className={'md:w-8/12 md:text-center'}>
        <Field.Text
          name="docsText"
          defaultValue={`
We provide step-by-step tutorials to use our graphical user interface,
as well as documentation to start your learning journey with PhotonQ -
from quantum computing basics to the specific aspects of our photonic
hardware.`}
        />
      </div>
      <GuidePreviewGrid>
        {filteredGuides
          .slice(0, 3)
          .map(child =>
            withJaenPage(
              child.id,
              <GuidePreview
                key={child.id}
                index="how-to-guides"
                slug={child.slug!}
              />
            )
          )}
      </GuidePreviewGrid>
      <div className={'pt-8'}>
        <Button
          onClick={() =>
            navigate(
              getLangRootNavigationPath(location?.pathname, '/how-to-guides')
            )
          }
          variant={'contained'}
          size={'large'}>
          Read more
        </Button>
      </div>
    </div>
  )
}
