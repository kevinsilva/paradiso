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
