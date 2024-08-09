import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import meal from './meals/slice';
import filter from './filterSlice/slice'

export const store = configureStore({
  reducer: {
    meal,
    filter
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
