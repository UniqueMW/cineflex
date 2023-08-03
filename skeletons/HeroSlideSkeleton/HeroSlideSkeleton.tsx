import React from 'react'
import { ContentLoader } from 'PackagesClientComponents/reactContentLoader'

function HeroSlideSkeleton(): JSX.Element {
  return (
    <ContentLoader viewBox="0 0 1349 758.81">
      <rect x={10} y={32} width="60%" height={20} />
    </ContentLoader>
  )
}

export default HeroSlideSkeleton
