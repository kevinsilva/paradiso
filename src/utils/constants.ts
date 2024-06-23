// URL
export const IMAGE_URL = {
  original: 'https://image.tmdb.org/t/p/original',
  medium: 'https://image.tmdb.org/t/p/w500',
  small: 'https://image.tmdb.org/t/p/w300',
};

export const VIDEO_URL =
  'https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4';

// DIMENSIONS
export const VERTICAL_CARD_SIZE = {
  width: '18.6rem',
  height: '27.8rem',
};

export const HORIZONTAL_CARD_SIZE = {
  width: '18.6rem',
  height: '10.4rem',
};

export const CARD_PARAGRAPH_HEIGHT = '1.75rem';

// API PARAMS

export const API_PARAMS_BEST = {
  include_adult: false,
  include_video: true,
  language: 'en-US',
  page: 1,
  sort_by: 'popularity.desc',
  'vote_average.gte': 8,
  'vote_count.gte': 1000,
};

export const API_PARAMS_SEARCH = {
  include_adult: false,
  language: 'en-US',
  page: 1,
};

export const API_PARAMS_DETAILS = {
  language: 'en-US',
};

export const API_PARAMS_RECOMMENDATIONS = {
  language: 'en-US',
  page: 1,
};
