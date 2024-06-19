import { Header } from './components/Header';
import { HorizontalCard } from './components/HorizontalCard';
import { VerticalCard } from './components/VerticalCard';
import './App.css';
import { usePopularMovies } from './hooks/popular';
import { usePopularSeries } from './hooks/popular';
import { ScrollableRow } from './components/ScrollableRow';
import { CardTypes } from './components/ScrollableRow';

function App() {
  const { data, isLoading, error } = usePopularMovies();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <>
      <Header />
      {data &&
        ScrollableRow({
          title: 'Popular Movies',
          data,
          cardType: CardTypes.HORIZONTAL,
        })}
      {/* {data && (
        <div>
          <div className='scrollbar-hide -mx-4 flex h-full overflow-x-auto scroll-smooth pb-12'>
            {data &&
              data.map((item) => (
                <div className='mx-4'>
                  <HorizontalCard
                    title={item.name}
                    imageSrc={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  />
                </div>
              ))}
          </div>
        </div>
      )} */}
      {/* {data2 && (
        <div className='scrollbar-hide -mx-4 flex h-full overflow-x-auto scroll-smooth pb-12'>
          {data2.map((item) => (
            <div key={item.id} className='mx-4'>
              <VerticalCard
                title={item.name}
                imageSrc={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
              />
            </div>
          ))}
        </div>
      )} */}
    </>
  );
}

export default App;
