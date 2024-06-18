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
