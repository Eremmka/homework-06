import './Episodes.css';
import { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import useSearchInfo from '../../hooks/useSearchInfo/useSearchInfo';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent'

export default function Locations() {
  const observer = useRef();
  const { 
    data: episodesData = [],
    loading,
    error,
    hasMore
  } = useSearchInfo('https://rickandmortyapi.com/api/episode');
  
  const lastNodeRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
      }
    });
    
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <section className='first-section-episodes'>
      <h1>Эпизоды Мультфильма</h1>
      <div className='episodes-section-grid'>
        {episodesData.map((episode, index) => (
          <Link to={`${episode.id}`} key={episode.id}>
            {episodesData.length - 20 === index + 1 ? (
              <div ref={lastNodeRef} className='episode-card'>
                <h1>Номер эпизода: {episode.id}</h1>
                <h1>Название эпизода: {episode.name}</h1>
              </div>
            ) : (
              <div className='episode-card'>
                <h1>Номер эпизода: {episode.id}</h1>
                <h1>Название эпизода: {episode.name}</h1>
              </div>
            )}
          </Link>
        ))}
      </div>
      {loading && <LoadingComponent/>}
    </section>
  );
}