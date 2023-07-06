import React from 'react'
import { motion } from 'PackagesClientComponents/framerMotion'

interface IToggleButtonProps {
  options: [string, string]
}

function ToggleButton(props: IToggleButtonProps): JSX.Element {
  const [isToggle, setIsToggle] = React.useState(true)
  const [width, setWidth] = React.useState(10)
  const headingRef = React.useRef<HTMLHeadingElement>(null)

  React.useEffect(() => {
    const heading = headingRef.current
    if (heading !== null) {
      setWidth(heading.offsetWidth)
    }
  }, [headingRef.current?.offsetWidth, headingRef.current, isToggle])

  const handleToggle = (): void => {
    setIsToggle((prev) => !prev)
  }

  return (
    <button
      className={`flex border border-button bg-background items-center rounded-sm ${
        isToggle ? 'flex-row-reverse' : 'flex-row'
      }`}
      onClick={handleToggle}
    >
      <h3
        className="h-7 flex-grow text-headline font-heading tracking-wide px-1"
        ref={headingRef}
      >
        {isToggle ? props.options[0] : props.options[1]}
      </h3>
      <motion.div
        className="flex-grow h-7 bg-button"
        initial={{ width }}
        layout
      >
        {' '}
      </motion.div>
    </button>
  )
}

export default ToggleButton
