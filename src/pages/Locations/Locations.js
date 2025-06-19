import './Locations.css'
import locationsData from '../../data/location.json'
import { Link } from 'react-router-dom'

export default function Episodes() {
  
  
  return(
    <section className='firstSection-locations'>
      <h1>Локации Мультфильма</h1>
      <div className='locationsSectionGrid'>
        {
          locationsData.map(location => (
              <Link to={`${location.id}`} key={location.id}>
                <div className="locations-card">
                  <h1>Локация: {location.id}</h1>
                  <h2>Название эпизода: {location.name}</h2>
                </div>
              </Link>
            )
          )
        }
      </div>
    </section>
  )
}