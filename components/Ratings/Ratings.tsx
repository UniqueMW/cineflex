import React from 'react'
import { ImStarFull, ImStarHalf, ImStarEmpty } from 'react-icons/im'

interface IRatingsProps {
  rating: number
}

function Ratings({ rating }: IRatingsProps): JSX.Element {
  const [stars, setStars] = React.useState<Array<2 | 1 | 0>>([])
  const [showNumber, setShowNumber] = React.useState(false)

  React.useEffect(() => {
    const convertedStars: Array<2 | 1 | 0> = []
    let convertedRatings = (rating / 10) * 5

    for (let i = 0; i < 5; i++) {
      if (convertedRatings > 1) {
        convertedStars.push(2)
        convertedRatings--
      } else if (convertedRatings >= 0.3 && convertedRatings <= 0.7) {
        convertedStars.push(1)
        convertedRatings = 0
      } else if (convertedRatings > 0.7) {
        convertedStars.push(2)
        convertedRatings = 0
      } else {
        convertedStars.push(0)
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
    <button onClick={handleShowNumber}>
      {showNumber ? (
        <h3 className="flex flex-row items-center font-heading text-headline tracking-wider text-base mb-0 h-5">
          <ImStarFull className="text-[#FFD700] mr-1" />
          {rating}
        </h3>
      ) : (
        <div className="flex flex-row space-x-2 text-base h-5">
          {renderStars}
        </div>
      )}
    </button>
  )
}

export default Ratings
