import { QueryFunction, QueryKey } from '@tanstack/react-query';
import { ReactNode } from 'react';

export type TitlesTypes = {
  id: number;
  title?: string;
  name?: string;
  backdrop_path: string;
  overview: string;
};

export type CarouselTypes = {
  data: TitlesTypes[];
};

export type ScrollableRowTypes = {
  title: string;
  children: ReactNode;
};

export type PopularSeriesTypes = {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

export type PopularMoviesTypes = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: GenreTypes[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type GenreTypes = {
  id: number;
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
