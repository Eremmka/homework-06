import './Episodes.css'
import episodesData from '../../data/episode.json'
import { Link } from 'react-router-dom'

export default function Episodes() {
  
  
  return(
    <section className='first-section-episodes'>
      <h1>Эпизоды Мультфильма</h1>
      <div className='episodes-section-grid'>
        {
          episodesData.map(episode => (
              <Link to={`${episode.id}`} key={episode.id}>
                <div className="episode-card">
                  <h1>Эпизод: {episode.id}</h1>
                  <h2>Название эпизода: {episode.name}</h2>
                </div>
              </Link>
            )
          )
        }
      </div>
    </section>
  )
}