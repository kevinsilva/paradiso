import { QueryFunction, QueryKey } from '@tanstack/react-query';
import { ReactNode } from 'react';

export type TitleTypes = {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
  backdrop_path?: string;
  genres?: { id: number; name: string }[];
  tagline?: string;
  release_date?: string;
  runtime?: number;
  vote_average?: number;
  overview?: string;
};

export type DetailTypes = {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
  backdrop_path?: string;
  genres?: { id: number; name: string }[];
  tagline?: string;
  release_date?: string;
  runtime?: number;
  vote_average?: number;
  overview?: string;
};

export type CreditTypes = {
  cast: { id: number; name: string; profile_path: string }[];
};

export type RecommendationTypes = {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
};

export type HomePageDetailsTypes = {
  trending: TitleTypes[];
  PopularMovies: TitleTypes[];
  PopularSeries: TitleTypes[];
  MusicMovies: TitleTypes[];
  documentarySeries: TitleTypes[];
};

export type SearchPageDetailsTypes = {
  movies: TitleTypes[];
  series: TitleTypes[];
  query: string;
};

export type TitlePageDetailsTypes = {
  details: TitleTypes;
  credits: CreditTypes;
  recommendations: RecommendationTypes[];
};

export type CarouselTypes = {
  data: TitleTypes[];
};

export type ScrollableRowTypes = {
  title: string;
  children: ReactNode;
};

export type GenreTypes = {
  id: number;
  name?: string;
};

// USEFETCH

export type FetchOptions = {
  enabled?: boolean;
};

export type UseFetchTypes = {
  queryKey: QueryKey;
  queryFn: QueryFunction;
  options?: FetchOptions;
};

export enum CardTypeTypes {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

export type CardTypes = {
  title: string;
  imageSrc: string;
  link?: string;
};
