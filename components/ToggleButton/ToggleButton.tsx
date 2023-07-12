import React from 'react'
import { motion } from 'PackagesClientComponents/framerMotion'

interface IToggleButtonProps {
  options: [string, string]
  setOption: React.Dispatch<React.SetStateAction<string>>
  toggleIndicatorClass: string
}

function ToggleButton(props: IToggleButtonProps): JSX.Element {
  const [isToggle, setIsToggle] = React.useState(true)

  const handleToggle = (): void => {
    setIsToggle((prev) => !prev)
    props.setOption(isToggle ? props.options[1] : props.options[0])
  }

  return (
    <button
      className={`flex border border-button bg-background items-center rounded-sm ${
        isToggle ? 'flex-row-reverse' : 'flex-row'
      }`}
      onClick={handleToggle}
    >
      <h3 className="h-7 flex-grow text-headline font-heading tracking-wide px-1">
        {isToggle ? props.options[0] : props.options[1]}
      </h3>
      <motion.div
        className={`flex-grow h-7 bg-button ${props.toggleIndicatorClass}`}
        layout
      >
        {' '}
      </motion.div>
    </button>
  )
}

export default ToggleButton
