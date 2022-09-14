import {useJaenPageIndex} from '@jaenjs/jaen'
import {useEffect, useMemo, useState} from 'react'

import {GuideCategory} from './GuideFilter'

export function useGuideFilter(props: {jaenPageId?: string; path?: string}) {
  const {children: guides, withJaenPage} = useJaenPageIndex({
    jaenPageId: props.jaenPageId,
    path: props.path,
    filter: page => {
      console.log('page', page)
      return true
    }
  })

  console.log(`guides`, guides)

  const [isFirstFetch, setIsFirstFetch] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [filteredGuides, setFilteredGuides] = useState(guides)
  const [currentCategory, setCurrentCategory] = useState<GuideCategory>(
    GuideCategory.All
  )

  const fetchGuidesByCategory = async () => {
    setIsLoading(true)

    const filteredGuides =
      currentCategory === GuideCategory.All
        ? guides
        : guides.filter(guide => {
            const fieldValue: string =
              guide.jaenFields?.['IMA:ChoiceField']?.['category'].value

            console.log('Field value', fieldValue, currentCategory)

            return fieldValue === currentCategory
          })

    setFilteredGuides(filteredGuides)
    setIsLoading(() => false)
  }

  useEffect(() => {
    if (!isFirstFetch) {
      fetchGuidesByCategory()
    } else {
      setIsFirstFetch(false)
    }
  }, [currentCategory])

  const sortedGuides = useMemo(
    () =>
      filteredGuides.sort((a, b) => {
        const dateA = new Date(
          a.jaenPageMetadata?.datePublished ?? ''
        ).getTime()
        const dateB = new Date(
          b.jaenPageMetadata?.datePublished ?? ''
        ).getTime()

        return dateB - dateA
      }),
    [filteredGuides]
  )

  return {
    currentCategory,
    setCurrentCategory,
    filteredGuides: sortedGuides,
    setFilteredGuides,
    isLoading,
    withJaenPage
  }
}
