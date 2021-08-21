const API_BASE = 'https://api.themoviedb.org/3'

const basicFetch = async (endpoint: string) => {
  const req = await fetch(
    `${API_BASE}${endpoint}${endpoint.includes('?') ? '&' : '?'}language=pt-BR&api_key=${
      process.env.REACT_APP_API_KEY
    }`
  )
  return req.json()
}

export const getHomeList = async (): Promise<IMovieList[]> => {
  const items = await Promise.all([
    basicFetch('/discover/tv?with_network=213'),
    basicFetch('/trending/all/week'),
    basicFetch('/movie/top_rated'),
    basicFetch('/discover/movie?with-genres=28'),
    basicFetch('/discover/movie?with-genres=35'),
    basicFetch('/discover/movie?with-genres=27'),
    basicFetch('/discover/movie?with-genres=10749'),
    basicFetch('/discover/movie?with-genres=99')
  ])

  return [
    {
      slug: 'originals',
      title: 'Originais do Netflix',
      items: []
    },
    {
      slug: 'trending',
      title: 'Recomendados para você',
      items: []
    },
    {
      slug: 'toprated',
      title: 'Em Alta',
      items: []
    },
    {
      slug: 'action',
      title: 'Ação',
      items: []
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      items: []
    },
    {
      slug: 'horror',
      title: 'Terror',
      items: []
    },
    {
      slug: 'romance',
      title: 'Romance',
      items: []
    },
    {
      slug: 'documentary',
      title: 'Documentários',
      items: []
    }
  ].map((section, index) => ({
    ...section,
    items: items[index].results
  }))
}

export const getMovieInfo = async (
  movieId: number,
  type: 'movie' | 'tv'
): Promise<IFeaturedMovie> => {
  return basicFetch(`/${type}/${movieId}`)
}

export interface IMovieList {
  slug: string
  title: string
  items: IMovie[]
}

export interface IMovie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  media_type: string
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

export interface IFeaturedMovie {
  backdrop_path: string
  created_by: {
    id: number
    credit_id: string
    name: string
    gender: number
    profile_path: string
  }[]
  episode_run_time: number[]
  first_air_date: string
  genres: IFeaturedMovieGenre[]
  homepage: string
  id: number
  in_production: boolean
  languages: string[]
  last_air_date: string
  last_episode_to_air: {
    air_date: string
    episode_number: number
    id: number
    name: string
    overview: string
    production_code: string
    season_number: number
    still_path: string
    vote_average: number
    vote_count: number
  }
  name: string
  next_episode_to_air: {
    air_date: string
    episode_number: number
    id: number
    name: string
    overview: string
    production_code: string
    season_number: number
    still_path?: any
    vote_average: number
    vote_count: number
  }
  networks: {
    name: string
    id: number
    logo_path: string
    origin_country: string
  }[]
  number_of_episodes: number
  number_of_seasons: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: {
    id: number
    logo_path: string
    name: string
    origin_country: string
  }[]
  production_countries: {
    iso_3166_1: string
    name: string
  }[]
  seasons: {
    air_date: string
    episode_count: number
    id: number
    name: string
    overview: string
    poster_path: string
    season_number: number
  }[]
  spoken_languages: {
    english_name: string
    iso_639_1: string
    name: string
  }[]
  status: string
  tagline: string
  type: string
  vote_average: number
  vote_count: number
}

export interface IFeaturedMovieGenre {
  id: number
  name: string
}
