import './Heroes.css'
import heroesData from '../../data/characters.json'
import { Link } from 'react-router-dom'

export default function Heroes() {
  const handleClick = () => {
    <div>
      
    </div>
  }
  return(
    <section className="firstSection-heroes">
      <h1>Герои Мультфильма</h1>
      <div className='heroesSectionGrid'>
        {
          heroesData.map(hero => (
            <Link to={`${hero.id}`} key={hero.id}>
              <div className="hero-card" onClick={handleClick}>
                <img src={hero.image} alt='hero_img'/>
                <h3>Имя: {hero.name}</h3>
              </div>
            </Link>
            )
          )
        }
      </div>
    </section>
  )
}