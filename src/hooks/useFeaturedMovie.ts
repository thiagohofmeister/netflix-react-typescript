import { useEffect, useState } from 'react'
import { getMovieInfo, IFeaturedMovie, IMovieList } from '../api/index'

export const useFeaturedMovie = (movieList: IMovieList[]) => {
  const [featuredData, setFeaturedData] = useState<IFeaturedMovie | null>(null)

  useEffect(() => {
    const loadAll = async () => {
      if (!movieList.length) return

      const originals = movieList.find((item: IMovieList) => item.slug === 'originals')!
      const randomChosen = Math.floor(Math.random() * originals.items.length - 1)
      const chosen = originals.items[randomChosen >= 0 ? randomChosen : 0]
      const chosenInfo = await getMovieInfo(chosen.id, 'tv')

      setFeaturedData(chosenInfo)
    }

    loadAll()
  }, [movieList])

  return [featuredData]
}
