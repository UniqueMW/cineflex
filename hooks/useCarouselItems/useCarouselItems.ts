import React from 'react'
import type { IMovieDetail, ISeriesDetail, ICarouselGroupItem } from 'types'
import type { SWRResponse } from 'swr'

function useCarouselItems(
  data: (IMovieDetail & ISeriesDetail) | undefined,
  additionalData: SWRResponse,
  mediaType: string
): ICarouselGroupItem[] | undefined {
  const [carouselItems, setCarouselItems] =
    React.useState<ICarouselGroupItem[]>()

  React.useEffect(() => {
    if (mediaType === 'MOVIE' && additionalData.data !== undefined) {
      setCarouselItems([
        {
          title: 'Cast',
          data: additionalData.data[0].cast,
          cardType: 'ACTOR'
        },
        {
          title: 'Recommended Picks',
          data: additionalData.data[1].results
        }
      ])
    } else if (additionalData.data !== undefined && data !== undefined) {
      setCarouselItems([
        { title: 'Seasons', data: data?.seasons },
        {
          title: 'Cast',
          data: additionalData.data[0].cast,
          cardType: 'ACTOR'
        },
        {
          title: 'Recommended Picks',
          data: additionalData.data[1].results
        }
      ])
    }
  }, [data, additionalData.data])

  return carouselItems
}

export default useCarouselItems
