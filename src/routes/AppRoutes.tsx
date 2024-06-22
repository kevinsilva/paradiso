import { Routes, Route } from 'react-router-dom';
import { SearchPage } from '../pages/SearchPage';
import { HomePage } from '../pages/HomePage';
import { MoviePage } from '../pages/MoviePage';
import { SeriePage } from '../pages/SeriePage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/search/:query' element={<SearchPage />} />
      <Route path='/tv-serie/:id/:title' element={<SeriePage />} />
      <Route path='/movie/:id/:title' element={<MoviePage />} />
    </Routes>
  );
};
