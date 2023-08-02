'use client'
import React from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { Button } from 'components'
import { debounce } from 'utils'
import type { IFilterConfig } from 'types'

interface ISearchBarProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>
  setConfig: React.Dispatch<React.SetStateAction<IFilterConfig>>
  setIsDisplaySuggestion: React.Dispatch<React.SetStateAction<boolean>>
  segment: string
  inputSuggestion: string
  isHoverSuggestion: boolean
}

// TODO turn into a form

function SearchBar(props: ISearchBarProps): JSX.Element {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const delaySearchedWord = React.useCallback(debounce(), [])
  const handleSearchSuggestion = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    props.setIsDisplaySuggestion(true)
    delaySearchedWord((): void => {
      props.setSearch(event.target.value)
    }, 500)
  }

  const handleSearch = (): void => {
    if (inputRef.current !== null) {
      const searchValue = inputRef.current.value
      props.setConfig({ page: 1, query: searchValue })
      props.setIsDisplaySuggestion(false)
    }
  }

  const handleDisplaySuggestion = (): void => {
    if (inputRef.current !== null) {
      const searchValue = inputRef.current.value
      props.setIsDisplaySuggestion(searchValue.length > 0)
    }
  }

  const handleHideSuggestion = (): void => {
    if (!props.isHoverSuggestion) {
      props.setIsDisplaySuggestion(false)
    }
  }

  React.useEffect(() => {
    if (inputRef.current !== null) {
      const searchValue = inputRef.current.value
      props.setConfig({ page: 1, query: searchValue })
    }
  }, [props.segment])

  React.useEffect(() => {
    if (inputRef.current !== null && props.inputSuggestion.length > 0) {
      inputRef.current.value = props.inputSuggestion
    }
  }, [props.inputSuggestion, inputRef])

  return (
    <div className="flex flex-row justify-center py-4">
      <section className="flex flex-row justify-center gap-x-2 lg:w-1/2 md:w-4/5 w-full h-fit py-2 px-6 shadow-md">
        <input
          type="text"
          placeholder="Try Severance"
          className="border border-button w-full h-12 bg-transparent px-1 text-headline font-heading tracking-wider outline-none"
          onChange={handleSearchSuggestion}
          onFocus={handleDisplaySuggestion}
          onBlur={handleHideSuggestion}
          ref={inputRef}
        />
        <Button
          className="flex flex-row items-center gap-x-2 text-heading font-heading tracking-wider"
          onClick={handleSearch}
        >
          <RiSearch2Line />
          <h4 className="md:block hidden">Search</h4>
        </Button>
      </section>
    </div>
  )
}

export default SearchBar
