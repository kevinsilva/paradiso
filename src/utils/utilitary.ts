import { GenreTypes, TitleTypes } from './types';

export const getGenreId = async (
  fetchGenres: () => Promise<GenreTypes[]>,
  genre: string
) => {
  try {
    const fetchedGenres = await fetchGenres();
    const foundGenre = fetchedGenres.find(
      (result: any) => result.name.toLowerCase() === genre.toLowerCase()
    );

    if (foundGenre) return foundGenre.id;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const reduceText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const generateURL = (item: TitleTypes) => {
  const baseUrl = item.name ? '/tv-serie/' : '/movie/';
  const name = item.name || item.title;

  if (!name) return '';
  return `${baseUrl}${item.id}/${name.split(' ').join('-').toLowerCase()}`;
};

export const getRandomItems = (arr: any, num: number) => {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};
