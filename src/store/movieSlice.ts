import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Movie} from 'src/modal/movie';
import {MovieApi} from 'src/service/movieApi';
import {RootState} from 'src/Store';
import storageHelper, {StorageKey} from 'src/common/utils/storageHelper';

type MovieState = {
  page: number;    
  data: Movie[];
};

const initialState: MovieState = {  
  page: 0, 
  data: [],
};

export const MovieSlice = createSlice({
  name: 'Movie',
  initialState,
  reducers: {
    setMovie: (state, action: PayloadAction<MovieState>) => {
      state.page = action.payload.page;
      state.data = action.payload.data;
    },
    reset: state => (state = initialState),
  },
  extraReducers: builder => {
    builder     
      .addMatcher(
        MovieApi.endpoints.getPopularMovie.matchFulfilled,
        (state, {payload}) => {      
          state.page = payload.page;
          state.data = [...state.data, ...payload.results];
          storageHelper.setStorage(StorageKey.movieLoadedPage, state.page);
          storageHelper.setStorage(StorageKey.movieList, state.data);          
        },
      )
  },
});

export const getCurrentMoviePage = (state: RootState) =>
  state.movie.page;
export const getMovieList = (state: RootState) => state.movie.data;
