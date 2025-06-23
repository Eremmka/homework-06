import './App.css';
import { Routes, Route } from 'react-router-dom';
import Episodes from './pages/Episodes/Episodes';
import Heroes from './pages/Heroes/Heroes';
import Locations from './pages/Locations/Locations';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import { HeaderLayout } from './layouts/HeaderLayuot/HeaderLayout'
import InfoComponent from './pages/InfoComponent/InfoComponent';
import Signin from './pages/Signin/Signin'
import { AuthProvider } from './context/AuthProvider';
import {PrivateRoute} from './components/PrivateRoute/PrivateRoute'

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<HeaderLayout />}>

          <Route index element={<Home />} />
          
          <Route path="heroes">
            <Route index element={<PrivateRoute><Heroes /></PrivateRoute>}/>
            <Route path=':id' element={<InfoComponent category='heroes' />} />
          </Route>
          
          <Route path="episodes">
            <Route index element={<PrivateRoute><Episodes /></PrivateRoute>}/>
            <Route path=':id' element={<InfoComponent category='episodes' />} />
          </Route>
          
          <Route path="locations">
            <Route index element={<PrivateRoute><Locations /></PrivateRoute>} />
            <Route path=':id' element={<InfoComponent category='locations' />} />
          </Route>
          <Route path="login">
            <Route index element={<Signin />} />
          </Route>
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}