import React from 'react'
import './App.scss'
import { FeaturedMovie } from './components/FeaturedMovie/index'
import { Header } from './components/Header/index'
import { MovieRow } from './components/MovieRow/index'
import { useFeaturedMovie } from './hooks/useFeaturedMovie'
import { useMovieList } from './hooks/useMovieList'
import { useWindowScroll } from './hooks/useWindowScroll'
import { IMovieList } from './api/index'

function App() {
  const [blackHeader] = useWindowScroll()
  const [movieList] = useMovieList()
  const [featuredData] = useFeaturedMovie(movieList)

  return (
    <div className="page">
      <Header black={blackHeader} />

      {!!featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item: IMovieList, key: number) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Direitos de imagem para Netflix <br />
        Dados pegos do site Themoviedb.org
      </footer>

      {!movieList.length && (
        <div className="loading">
          <img
            src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"
            alt="Carregando..."
          />
        </div>
      )}
    </div>
  )
}

export default App
