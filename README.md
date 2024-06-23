# Paradiso

Paradiso is a React-based web application that provides users with information about trending movies, TV series, and various genres. The application fetches data from [The Movie Database API](https://www.themoviedb.org/documentation/api) to display details about movies and tv series, including their popularity, genres, and recommendations. Users can also search for specific titles and view detailed pages for each movie or series.

## Implementation Details

The project is built with [React](https://react.dev/) as a foundation and is written in [TypeScript](https://www.typescriptlang.org/) to ensure type safeness and robustness of code. Axios is employed for making HTTP requests and [React Query](https://tanstack.com/query/latest) is utilized to manage server state and caching of the API calls, optimizing data fetching. Navigation is powered by [react-router-dom](https://www.npmjs.com/package/react-router-dom) and testing is conducted with [React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro/) and [Jest](https://jestjs.io/). The front-end incorporates [Tailwind CSS](https://tailwindcss.com/) for styling and [Phosphor Icons](https://phosphoricons.com/) for visual elements, contributing to a user-friendly interface.

## Usage

The project is structured into several components inherent to main application features.

- **Header**: serves as the main navigation bar, providing link to homepage and includes a search bar for the search functionality.
- **HomePage**: gets data from trending, popular and genre specific movies and series. It also renders the HomePageDetails.
- **HomePageDetails**: renders fetched data in Carousel and Scrollable Rows handling the view logic.
- **SearchPage**: gets data from specific searched query for both movies and tv-series, rendering the logic on the SearchPageDetails.
- **SearchPageDetails**: renders searched results.
- **MoviePage and SeriePage**: gets details, cast and recommendations data from specific title and renders view logic with TitlePageDetails.
- **SeriePage**: gets
- **TitlePageDetails**: renders detailed information for both movies and tv-series, rendering a hardcoded video on full-screen when watch video button gets clicked.

### Hooks

The `useFetch` is a custom hook to fetch data from the API and to avoid code repetition. Specific hooks for specific API calls were created leveraging `useFetch`.

## Development

To install the component, clone repository, change into directory on the terminal and install with npm. Add access token as environment variable.

```bash
git clone https://github.com/kevinsilva/paradiso
cd paradiso
npm install
```

To run the application.

```bash
  npm run dev
```

To run the tests.

```bash
  npm run test
```

> **! Note**
> Obtain your api_access_token from a [The Movie Database API](https://www.themoviedb.org/documentation/api) account. Then, create a .env file at the root of your project. Inside this file, define the environment variable VITE_TMDB_ACCESS_TOKEN with your token value.

## Credits

Data from [The Movie Database API](https://www.themoviedb.org/documentation/api).

## License

[MIT](https://choosealicense.com/licenses/mit/)
