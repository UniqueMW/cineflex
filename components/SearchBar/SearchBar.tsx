'use client'
import React from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { Button } from 'components'
import { debounce } from 'utils'

interface ISearchBarProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

function SearchBar(props: ISearchBarProps): JSX.Element {
  const delaySearchedWord = React.useCallback(debounce(), [])
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    delaySearchedWord((): void => {
      props.setSearch(event.target.value)
    }, 500)
  }
  return (
    <div className="flex flex-row justify-center py-4">
      <section className="flex flex-row justify-center gap-x-2 lg:w-1/2 md:w-4/5 w-full h-fit py-2 px-6 shadow-md">
        <input
          type="text"
          placeholder="Try Severance"
          className="border border-button w-full h-12 bg-transparent px-1 text-headline font-heading tracking-wider outline-none"
          onChange={handleSearch}
        />
        <Button className="flex flex-row items-center gap-x-2 text-heading font-heading tracking-wider">
          <RiSearch2Line />
          <h4 className="md:block hidden">Search</h4>
        </Button>
      </section>
    </div>
  )
}

export default SearchBar
