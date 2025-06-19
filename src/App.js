import './App.css';
import { Routes, Route } from 'react-router-dom';
import Episodes from './pages/Episodes/Episodes';
import Heroes from './pages/Heroes/Heroes';
import Locations from './pages/Locations/Locations';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import { HeaderLayout } from './Layout/HeaderLayout';
import InfoComponent from './pages/InfoComponent/InfoComponent';

export default function App() {
  return (
    <div className='firstDiv-App'>
      <Routes>
        <Route element={<HeaderLayout />}>
          <Route index element={<Home />} />
          
          <Route path="heroes">
            <Route index element={<Heroes />} />
            <Route path=':id' element={<InfoComponent category='heroes' />} />
          </Route>
          
          <Route path="episodes">
            <Route index element={<Episodes />} />
            <Route path=':id' element={<InfoComponent category='episodes' />} />
          </Route>
          
          <Route path="locations">
            <Route index element={<Locations />} />
            <Route path=':id' element={<InfoComponent category='locations' />} />
          </Route>
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}