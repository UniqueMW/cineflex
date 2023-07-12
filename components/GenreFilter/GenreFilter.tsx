'use client'
import React from 'react'
import useSWR from 'swr'
import { GiClapperboard } from 'react-icons/gi'
import { ToggleButton, Chip } from 'components'
import { PageFilterContext } from 'reactContexts'
import { fetcher, groupFilterOptionsWithLogic } from 'utils'
import type { GenreList, Genre, IWatchProvider } from 'types'

interface IGenreFilter {
  title: string
}

function GenreFilter(props: IGenreFilter): JSX.Element {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string
  const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
  const { data } = useSWR<GenreList>(genresUrl, fetcher)
  const filterContext = React.useContext(PageFilterContext)

  const [selectedChips, setSelectedChips] =
    React.useState<Array<Genre & IWatchProvider>>()
  const [toggleOption, setToggleOption] = React.useState('Include')

  const genreOptions = React.useMemo(
    () =>
      data?.genres.map((genre) => (
        <option
          key={genre.id}
          value={JSON.stringify(genre)}
          className="w-fit border p-2 shadow-sm font-paragraph text-headline tracking-wide"
        >
          {genre.name}
        </option>
      )),
    [data]
  )

  const chips = React.useMemo(() => {
    if (typeof selectedChips !== 'undefined') {
      return selectedChips.map((chipInfo) => (
        <Chip
          key={chipInfo.id}
          id={chipInfo.id}
          selectedChips={selectedChips}
          setSelectedChips={setSelectedChips}
        >
          {chipInfo.name}
        </Chip>
      ))
    }
    return []
  }, [selectedChips])

  React.useEffect(() => {
    if (filterContext !== null && typeof selectedChips !== 'undefined') {
      delete filterContext.pageConfig.with_genres
      delete filterContext.pageConfig.without_genres
      const genreKey =
        toggleOption === 'Include' ? 'with_genres' : 'without_genres'

      filterContext.setPageConfig({
        ...filterContext.pageConfig,
        [genreKey]: groupFilterOptionsWithLogic(selectedChips),
        page: 1
      })
    }
  }, [selectedChips, toggleOption])

  const handleOnGenreSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const newChip = JSON.parse(event.target.value) as Genre & IWatchProvider

    if (Array.isArray(selectedChips) && selectedChips.length > 0) {
      const isChipSelected = selectedChips.some(
        (chip) => chip.id === newChip.id
      )
      if (isChipSelected) {
        setSelectedChips(selectedChips.filter((chip) => chip.id !== newChip.id))
      } else {
        setSelectedChips([...selectedChips, newChip])
      }
    } else {
      setSelectedChips([newChip])
    }
  }

  return (
    <section className="flex flex-col items-center lg:w-1/2 w-full justify-between text-lg text-headline font-heading tracking-wider space-y-1">
      <div className="flex flex-row items-center justify-between w-full">
        <h3 className="flex flex-row items-center text-left w-full">
          <GiClapperboard className="mr-2" />
          {props.title}
        </h3>
        <ToggleButton
          options={['Include', 'Exclude']}
          setOption={setToggleOption}
        />
      </div>
      <select
        className=" text-base w-full bg-background h-10 border border-button outline-none"
        onChange={handleOnGenreSelect}
      >
        {genreOptions}
      </select>
      <div className="flex flex-row flex-wrap justify-center gap-2 px-2">
        {chips}
      </div>
    </section>
  )
}

export default GenreFilter
