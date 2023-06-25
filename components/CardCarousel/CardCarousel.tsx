'use client'
import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import useSWR from 'swr'
import { fetcher } from 'utils'
import { ButtonIcon, Card } from 'components'
import {
  SwiperSlide,
  Swiper,
  Navigation
} from 'PackagesClientComponents/swiper'
import { GrDrag } from 'react-icons/gr'

import type { IMoviePage } from 'types'
import { useWindowSize } from 'hooks'
import type { DragControls } from 'framer-motion'

interface ICardCarouselProps {
  url: string
  carouselTitle: string
  controls?: DragControls
}

function CardCarousel(props: ICardCarouselProps): JSX.Element {
  const { data } = useSWR<IMoviePage>(props.url, fetcher)
  const [sizeType] = useWindowSize()

  const cards = React.useMemo(() => {
    return data?.results.map((movie) => (
      <SwiperSlide key={movie.id}>
        <Card data={movie} />
      </SwiperSlide>
    ))
  }, [data])

  const handleDrag = (event: any): void => {
    props.controls?.start(event)
  }

  return (
    <section className="lg:px-10 px-2 py-2 space-y-2">
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
}

export default CardCarousel
