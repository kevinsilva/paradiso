import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='text-sans mt-auto flex flex-col items-center justify-center bg-black pt-16 text-zinc-500'>
      <small className='mb-4'>
        &copy;{new Date().getFullYear()} Kevin Silva.{' '}
        <span className='text-xs'>
          Built with React & TypeScript, Tailwind CSS. Data from{' '}
          <Link to={'https://www.themoviedb.org/'} className='hover:opacity-90'>
            TMDB
          </Link>
        </span>
      </small>
    </footer>
  );
};
