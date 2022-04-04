import {configureStore} from '@reduxjs/toolkit';
import {MovieSlice} from 'src/store/movieSlice';
import { MovieApi } from 'src/service/movieApi';

export const store = configureStore({
    reducer: {
        movie: MovieSlice.reducer,
        [MovieApi.reducerPath]: MovieApi.reducer
    },
    middleware: getDefaultMiddleware => {
        const customMiddleware = [MovieApi.middleware];
        return getDefaultMiddleware().concat(customMiddleware);
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;