'use client'
import React from 'react'
import { ImStarFull, ImStarHalf, ImStarEmpty } from 'react-icons/im'
import { useWindowSize } from 'hooks'

interface IRatingsProps {
  rating: number
  className?: string
}

const Ratings = React.memo(function ({
  rating,
  className
}: IRatingsProps): JSX.Element {
  enum StarLevel {
    EMPTY,
    HALF,
    FULL
  }
  const [stars, setStars] = React.useState<Array<2 | 1 | 0>>([])
  const [showNumber, setShowNumber] = React.useState(false)
  const [, width] = useWindowSize()

  React.useEffect(() => {
    const convertedStars: Array<2 | 1 | 0> = []
    let convertedRatings = (rating / 10) * 5

    for (let i = 0; i < 5; i++) {
      if (convertedRatings > 1) {
        convertedStars.push(StarLevel.FULL)
        convertedRatings--
      } else if (convertedRatings >= 0.3 && convertedRatings <= 0.7) {
        convertedStars.push(StarLevel.HALF)
        convertedRatings = 0
      } else if (convertedRatings > 0.7) {
        convertedStars.push(StarLevel.FULL)
        convertedRatings = 0
      } else {
        convertedStars.push(StarLevel.EMPTY)
      }
    }

    setStars(convertedStars)
  }, [rating])

  const renderStars = React.useMemo(() => {
    return stars.map((star, index) => {
      if (star === 2) {
        return <ImStarFull key={index} className="text-[#FFD700] text-base" />
      } else if (star === 1) {
        return <ImStarHalf key={index} className="text-[#FFD700] text-base" />
      } else {
        return <ImStarEmpty key={index} className="text-[#FFD700] text-base" />
      }
    })
  }, [stars])

  const handleShowNumber = (): void => {
    setShowNumber(!showNumber)
  }

  return (
    <button
      onClick={handleShowNumber}
      className={`${className !== undefined ? className : ''}`}
    >
      {showNumber || width < 300 ? (
        <h3
          className={`flex flex-row items-center mb-0  ${
            className !== undefined
              ? className
              : 'font-heading text-headline tracking-wider md:text-base text-sm h-5'
          } `}
        >
          <ImStarFull className="text-[#FFD700] mr-1" />
          {rating}
        </h3>
      ) : (
        <div className="flex flex-row md:space-x-2 space-x-1 md:text-base sm:text-xs h-5">
          {renderStars}
        </div>
      )}
    </button>
  )
})

Ratings.displayName = 'Ratings'

export default Ratings
