export interface IMoviePage {
  page: number
  results: Array<IMovie | ICardSeriesAndMovie>
  total_pages: number
  total_results: number
}

export interface IMovie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface ICardSeriesAndMovie {
  adult: boolean
  backdrop_path: string
  id: number
  name?: string
  original_language: string
  original_name?: string
  overview: string
  poster_path: string
  media_type: string
  genre_ids: number[]
  popularity: number
  first_air_date?: string
  vote_average: number
  vote_count: number
  origin_country?: string[]
  title?: string
  original_title?: string
  release_date?: string
  video?: boolean
}

export interface GenreList {
  genres: Genre[]
}

export interface Genre {
  id: number
  name: string
}
