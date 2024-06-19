<p align="center"><img src="" width="100"></p>

<div align="center">

<a href="">[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-success?style=flat-square&logo=codesandbox)]()</a>

</div>

# Paradiso

A React-based front-end application for browsing movies and tv series.

## Implementation Details

This project leverages data from [Free-NBA](https://rapidapi.com/theapiguy/api/free-nba) to showcase NBA data. To enhance user experience, I've opted to reference data from the current season, minimizing requests from the free API and delivering cleaner, more concise information. The project is built with [React](https://react.dev/) and incorporates [TypeScript](https://www.typescriptlang.org/) for code robustness. It integrates a Dark Mode toggle through the ThemeSwitch component. Initialized with a default 'light' theme, it dynamically adjusts to stored preferences or user system settings using [Tailwind CSS](https://tailwindcss.com) dark class settings. Navigation is powered by [react-router-dom](https://www.npmjs.com/package/react-router-dom), and animations are implemented using [Framer-Motion](https://www.framer.com/motion/). Testing is conducted with [React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro/) and .

## Usage

The project is structured into several components inherent to main application features.

### 1. TeamsList

The `TeamsList` component serves as the home page, displaying a comprehensive list of NBA teams. It utilizes the `useDataContext` hook to efficiently fetch and manage team data across various main components.

## Development

To install the component, clone repository, change into directory on the terminal and install with npm.

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

## Credits

Data from [The Movie Database API](https://www.themoviedb.org/documentation/api).

## License

[MIT](https://choosealicense.com/licenses/mit/)
