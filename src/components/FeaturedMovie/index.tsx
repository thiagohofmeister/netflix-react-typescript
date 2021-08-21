import React from 'react'
import { IFeaturedMovie, IFeaturedMovieGenre } from '../../api/index'
import './style.scss'

export const FeaturedMovie: React.FC<IFeaturedMovieProps> = ({ item }) => {
  const firstDate = new Date(item.first_air_date)

  const genres: string[] = item.genres.reduce(
    (acc: string[], curr: IFeaturedMovieGenre) => [...acc, curr.name],
    []
  )

  return (
    <section
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url('https://image.tmdb.org/t/p/original${item.backdrop_path}')`
      }}>
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average} pontos</div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--seasons">
              {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}
            </div>
          </div>

          <div className="featured--description">{item.overview}</div>

          <div className="featured--buttons">
            <a href={`/watch/${item.id}`} className="featured--watchbutton">
              ▶ Assistir
            </a>
            <a href={`/list/add/${item.id}`} className="featured--mylistbutton">
              + Minha lista
            </a>
          </div>

          <div className="featured--genres">
            <strong>Gêneros:</strong> {genres.join(', ')}
          </div>
        </div>
      </div>
    </section>
  )
}

interface IFeaturedMovieProps {
  item: IFeaturedMovie
}
