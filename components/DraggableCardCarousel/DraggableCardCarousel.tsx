'use client'
import React from 'react'
import { Reorder, useDragControls } from 'PackagesClientComponents/framerMotion'
import type { ICardSeriesAndMovie, IMovie } from 'types'
import { CardCarousel } from 'components'

interface IDraggableCardCarouselProps {
  item: {
    title: string
    data: Array<ICardSeriesAndMovie & IMovie>
  }
}

function DraggableCardCarousel({
  item
}: IDraggableCardCarouselProps): JSX.Element {
  const controls = useDragControls()
  return (
    <Reorder.Item value={item} dragListener={false} dragControls={controls}>
      <CardCarousel
        carouselTitle={item.title}
        controls={controls}
        data={item.data}
      />
    </Reorder.Item>
  )
}

export default DraggableCardCarousel
