import { Header } from './components/Header';
import './App.css';
import { usePopularMovies } from './hooks/popular';
import { Carousel } from './components/Carousel';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  // const { data, isLoading, error } = usePopularMovies();

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error</div>;

  return (
    <div className='h-screen'>
      <Router>
        <Header />
        <AppRoutes />
      </Router>
      {/* {data &&
        ScrollableRow({
          title: 'Popular Movies',
          data,
          cardType: CardTypes.HORIZONTAL,
        })} */}

      {/* {data && <Carousel data={data} />} */}
    </div>
  );
}

export default App;
