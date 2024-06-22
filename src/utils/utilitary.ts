import { TitlesTypes } from './types';

export const getGenreId = async (
  fetchGenres: () => Promise<any[]>,
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

export const formatURL = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const reduceText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const generateURL = (item: TitlesTypes) => {
  const baseUrl = item.name ? '/tv-serie/' : '/movie/';
  const name = item.name || item.title;

  if (!name) return '';
  return `${baseUrl}${item.id}/${name.split(' ').join('-').toLowerCase()}`;
};
