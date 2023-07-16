'use client'
import React from 'react'
import { Reorder } from 'PackagesClientComponents/framerMotion'
import { DraggableCardCarousel } from 'components'
import type { ICarouselGroupItem } from 'types'

interface ICarouselGroupProps {
  items: ICarouselGroupItem[]
}

function CarouselGroup(props: ICarouselGroupProps): JSX.Element {
  const [items, setItems] = React.useState(props.items)

  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems}>
      {items.map((item) => (
        <DraggableCardCarousel item={item} key={item.title} />
      ))}
    </Reorder.Group>
  )
}

export default CarouselGroup
