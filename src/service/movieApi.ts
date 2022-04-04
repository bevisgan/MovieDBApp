import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Movie} from 'src/modal/movie';
import {clientConfig} from './clientConfig'

type ResponseList<T> = {
    page: number;    
    total_pages: number;
    total_results: number;
    results: T[];
  };
  
  type QueryArg = {
    page: number;
  };
  
  export const MovieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({baseUrl: clientConfig.baseUrl}),
    tagTypes: ['movie'],
    endpoints: builder => ({
      getPopularMovie: builder.query<ResponseList<Movie>, QueryArg>({
        query: ({page = 1}) =>
          `movie/popular?api_key=${clientConfig.api_key}&page=${page}`,
      }),
    }),
  });
  
  export const {useGetPopularMovieQuery, endpoints} = MovieApi;