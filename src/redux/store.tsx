import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import meal from './meals/slice';
import filter from './filterSlice/slice'
import favour from './favourites/slice'

export const store = configureStore({
  reducer: {
    meal,
    filter,
    favour
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
