'use client'
import React from 'react'
import { Reorder, useDragControls } from 'PackagesClientComponents/framerMotion'
import { CardCarousel } from 'components'

interface IDraggableCardCarouselProps {
  item: { title: string; url: string }
}

function DraggableCardCarousel({
  item
}: IDraggableCardCarouselProps): JSX.Element {
  const controls = useDragControls()
  return (
    <Reorder.Item value={item} dragListener={false} dragControls={controls}>
      <CardCarousel
        url={item.url}
        carouselTitle={item.title}
        controls={controls}
      />
    </Reorder.Item>
  )
}

export default DraggableCardCarousel
