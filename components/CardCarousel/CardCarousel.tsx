'use client'
import React from 'react'
import { GrDrag } from 'react-icons/gr'
import { ButtonIcon, Card } from 'components'
import {
  SwiperSlide,
  Swiper,
  Navigation
} from 'PackagesClientComponents/swiper'
import type { ICardSeriesAndMovie, IMovie, Season } from 'types'
import { useWindowSize } from 'hooks'
import type { DragControls } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/navigation'

interface ICardCarouselProps {
  // url: string
  carouselTitle: string
  controls?: DragControls
  data: Array<ICardSeriesAndMovie & IMovie & Season>
}

const CardCarousel = React.memo(function (
  props: ICardCarouselProps
): JSX.Element {
  const [sizeType] = useWindowSize()

  const cards = React.useMemo(() => {
    return props.data?.map((movie) => (
      <SwiperSlide key={movie.id}>
        <Card data={movie} />
      </SwiperSlide>
    ))
  }, [props.data])

  const handleDrag = (event: any): void => {
    props.controls?.start(event)
  }

  return (
    <section className="space-y-2">
      <div className="flex flex-row justify-between items-center">
        <h1 className="md:text-2xl text-xl text-headline font-heading font-semibold tracking-wider">
          {props.carouselTitle}
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
  )
})

CardCarousel.displayName = 'CardCarousel'

export default CardCarousel
