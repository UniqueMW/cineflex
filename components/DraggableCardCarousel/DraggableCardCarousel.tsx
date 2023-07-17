'use client'
import React from 'react'
import { Reorder, useDragControls } from 'PackagesClientComponents/framerMotion'
import { GrDrag } from 'react-icons/gr'
import { useWindowSize } from 'hooks'
import type { ICarouselGroupItem } from 'types'
import { Card, ButtonIcon, CastCard } from 'components'
import {
  SwiperSlide,
  Swiper,
  Navigation
} from 'PackagesClientComponents/swiper'

interface IDraggableCardCarouselProps {
  item: ICarouselGroupItem
}

function DraggableCardCarousel({
  item
}: IDraggableCardCarouselProps): JSX.Element {
  const controls = useDragControls()
  const [sizeType] = useWindowSize()
  const handleDrag = (event: any): void => {
    controls?.start(event)
  }

  const cards = React.useMemo(() => {
    return item.data?.map((movie) => (
      <SwiperSlide key={movie.id}>
        {item.cardType === 'ACTOR' ? (
          <CastCard cast={movie} />
        ) : (
          <Card data={movie} />
        )}
      </SwiperSlide>
    ))
  }, [item.data])

  return (
    <Reorder.Item value={item} dragListener={false} dragControls={controls}>
      <section className="space-y-2">
        <div className="flex flex-row justify-between items-center">
          <h1 className="md:text-2xl text-xl text-headline font-heading font-semibold tracking-wider">
            {item.title}
          </h1>
          <ButtonIcon className="px-1 cursor-grab" onPointerDown={handleDrag}>
            <GrDrag />
          </ButtonIcon>
        </div>
        <Swiper
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          slidesPerView={sizeType === 'lg' ? 6 : sizeType === 'md' ? 4 : 3}
          slidesPerGroup={sizeType === 'lg' ? 6 : sizeType === 'md' ? 4 : 3}
        >
          {cards}
        </Swiper>
      </section>
    </Reorder.Item>
  )
}

export default DraggableCardCarousel
