export interface IMoviePage {
  page: number
  results: Array<IMovie & ICardSeriesAndMovie>
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

export interface IWatchProviderList {
  results: IWatchProvider[]
}

export interface IWatchProvider {
  display_priorities: IDisplayPriorities
  display_priority: number
  logo_path: string
  provider_name: string
  provider_id: number
}

export interface IDisplayPriorities {
  CA?: number
  AE?: number
  AR?: number
  AT?: number
  AU?: number
  BE?: number
  BO?: number
  BR?: number
  BG?: number
  CH?: number
  CL?: number
  CO?: number
  CR?: number
  CZ?: number
  DE?: number
  DK?: number
  EC?: number
  EE?: number
  EG?: number
  ES?: number
  FI?: number
  FR?: number
  GB?: number
  GR?: number
  GT?: number
  HK?: number
  HN?: number
  HU?: number
  ID?: number
  IE?: number
  IN?: number
  IT?: number
  JP?: number
  LT?: number
  LV?: number
  MX?: number
  MY?: number
  NL?: number
  NO?: number
  NZ?: number
  PE?: number
  PH?: number
  PL?: number
  PT?: number
  PY?: number
  RU?: number
  SA?: number
  SE?: number
  SG?: number
  SK?: number
  TH?: number
  TR?: number
  TW?: number
  US?: number
  VE?: number
  ZA?: number
  SI?: number
  CV?: number
  GH?: number
  MU?: number
  MZ?: number
  UG?: number
  IL?: number
  BY?: number
  BZ?: number
  CY?: number
  LU?: number
  NI?: number
  UA?: number
  HR?: number
  IS?: number
  KR?: number
  TZ?: number
  AO?: number
  AZ?: number
  BF?: number
  ML?: number
  PG?: number
  ZW?: number
  AD?: number
  AG?: number
  AL?: number
  BA?: number
  BB?: number
  BH?: number
  BM?: number
  BS?: number
  CI?: number
  CU?: number
  DO?: number
  DZ?: number
  FJ?: number
  GF?: number
  GG?: number
  GI?: number
  GQ?: number
  IQ?: number
  JM?: number
  JO?: number
  KE?: number
  KW?: number
  LB?: number
  LC?: number
  LI?: number
  LY?: number
  MA?: number
  MC?: number
  MD?: number
  MK?: number
  MT?: number
  NE?: number
  NG?: number
  OM?: number
  PA?: number
  PF?: number
  PK?: number
  PS?: number
  QA?: number
  RO?: number
  RS?: number
  SC?: number
  SN?: number
  SM?: number
  SV?: number
  TC?: number
  TN?: number
  TT?: number
  UY?: number
  YE?: number
  ZM?: number
  CM?: number
  ME?: number
  MG?: number
  TD?: number
  VA?: number
  CD?: number
  GY?: number
  MW?: number
  XK?: number
}

export type sortByType =
  | 'popularity.asc'
  | 'popularity.desc'
  | 'revenue.asc'
  | 'revenue.desc'
  | 'primary_release_date.asc'
  | 'primary_release_date.desc'
  | 'vote_average.asc'
  | 'vote_average.desc'
  | 'vote_count.asc'
  | 'vote_count.desc'

export interface IFilterConfig {
  language?: 'en-US'
  include_adult?: boolean
  include_video?: boolean
  page: number
  with_genres?: string
  without_genres?: string
  with_watch_providers?: number
  without_watch_providers?: number
  year?: number
  query?: string
  'vote_average.gte'?: number
  sort_by?: sortByType
  [key: string]: undefined | boolean | number | string
}

export interface IPageFilterContext {
  pageConfig: IFilterConfig
  setPageConfig: React.Dispatch<React.SetStateAction<IFilterConfig>>
  genreType: 'MOVIES' | 'SERIES'
}

export interface ISeriesDetail {
  adult: boolean
  backdrop_path: string
  created_by: CreatedBy[]
  episode_run_time: any[]
  first_air_date: string
  genres: Genre[]
  homepage: string
  id: number
  in_production: boolean
  languages: string[]
  last_air_date: string
  last_episode_to_air: LastEpisodeToAir
  name: string
  next_episode_to_air: any
  networks: Network[]
  number_of_episodes: number
  number_of_seasons: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  seasons: Season[]
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  type: string
  vote_average: number
  vote_count: number
}

export interface CreatedBy {
  id: number
  credit_id: string
  name: string
  gender: number
  profile_path: string
}

export interface LastEpisodeToAir {
  id: number
  name: string
  overview: string
  vote_average: number
  vote_count: number
  air_date: string
  episode_number: number
  production_code: string
  runtime: number
  season_number: number
  show_id: number
  still_path: string
}

export interface Network {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export interface ProductionCompany {
  id: number
  logo_path?: string
  name: string
  origin_country: string
}

export interface ProductionCountry {
  iso_3166_1: string
  name: string
}

export interface Season {
  air_date: string
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string
  season_number: number
  vote_average: number
}

export interface SpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}

export interface IMovieDetail {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: BelongsToCollection
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface BelongsToCollection {
  id: number
  name: string
  poster_path: string
  backdrop_path: string
}

export interface ICarouselGroupItem {
  title: string
  data: Array<IMovie & ICardSeriesAndMovie & Season & Cast>
  cardType?: 'ACTOR'
}

export interface ICastAndCrew {
  id: number
  cast: Cast[]
  crew: Crew[]
}

export interface Cast {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path?: string
  cast_id: number
  character: string
  credit_id: string
  order: number
}

export interface Crew {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path?: string
  credit_id: string
  department: string
  job: string
}

export interface ITrailerList {
  id: number
  results: ITrailer[]
}

export interface ITrailer {
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: string
  id: string
}
