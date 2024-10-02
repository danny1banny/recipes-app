import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRecipe, TRecipe } from './types';
import axios from 'axios';
import { Status } from '../meals/types';
import { RootState } from '../store';

const axiosFetch = async (id: string) => {
  const respones = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  return respones.data.meals;
};

export const fetchMealById = createAsyncThunk('meal/fetchMealStatus', axiosFetch);

const initialState: IRecipe = {
  meals:'',
  favourMeal: [],
  status: Status.LOADING,
};

const favourMealSlice = createSlice({
  name: 'favour',
  initialState,
  reducers: {
    setMeal(state, action:PayloadAction<string>){
      state.meals = action.payload
    },
    setItemsFavour(state, action: PayloadAction<TRecipe>) {
      const findItem = state.favourMeal.find((obj) => obj.idMeal === action.payload.idMeal);
      if (findItem) {
        findItem;
      } else {
        state.favourMeal.push({ ...action.payload });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMealById.pending, (state) => {
        state.status = Status.LOADING;
        state.favourMeal = [];
      })
      .addCase(fetchMealById.fulfilled, (state, action) => {
        state.favourMeal = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchMealById.rejected, (state) => {
        state.status = Status.ERROR;
        state.favourMeal = [];
      });
  },
});

export const { setItemsFavour, setMeal } = favourMealSlice.actions;

export const selectFavourite = (state: RootState) => state.favour;

export default favourMealSlice.reducer;
