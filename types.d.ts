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
  results: Result[]
}

export interface IWatchProvider {
  display_priorities: DisplayPriorities
  display_priority: number
  logo_path: string
  provider_name: string
  provider_id: number
}

export interface DisplayPriorities {
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
