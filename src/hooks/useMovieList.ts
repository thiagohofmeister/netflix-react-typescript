import { useEffect, useState } from 'react'
import { IMovieList, getHomeList } from '../api/index'

export const useMovieList = () => {
  const [movieList, setMovieList] = useState<IMovieList[]>([])

  useEffect(() => {
    const loadAll = async () => {
      const list = await getHomeList()
      setMovieList(list)
    }

    loadAll()
  }, [])

  return [movieList]
}
