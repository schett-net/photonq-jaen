import {Field, navigate} from '@jaenjs/jaen'
import {Button} from '@mui/material'
import React from 'react'
import {useGuideFilter} from '../GuideFilter/hook.guideFilter'
import GuidePreview from './GuidePreview'
import {GuidePreviewGrid} from './GuidePreviewGrid'

export default function DocumentationPreview() {
  const {filteredGuides, withJaenPage} = useGuideFilter({
    jaenPageId: 'JaenPage /how-to-guides/'
  })

  return (
    <div className={'flex flex-col items-center space-y-5 text-xl'}>
      <h3 className={'text-3xl font-bold'}>
        <Field.Text
          name="docsHeadline"
          defaultValue="Documentation & How-To-Guides"
        />
      </h3>
      <p className={'md:w-8/12 md:text-center'}>
        <Field.Text
          name="docsText"
          defaultValue={`
We provide step-by-step tutorials to use our graphical user interface,
as well as documentation to start your learning journey with PhotonQ -
from quantum computing basics to the specific aspects of our photonic
hardware.`}
        />
      </p>
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
          onClick={() => navigate('/how-to-guides')}
          variant={'contained'}
          size={'large'}>
          Read more
        </Button>
      </div>
    </div>
  )
}
