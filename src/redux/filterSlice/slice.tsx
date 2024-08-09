import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICategory } from './types';
import { Status } from '../meals/types';
import { RootState } from '../store';

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  return data.categories;
});

const initialState: ICategory = {
  categoryId: '1',
  categoryName: 'beef',
  categories: [],
  status: Status.LOADING,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<string>) {
      state.categoryId = action.payload;
    },
    setCategoryName(state, action: PayloadAction<string>){
      state.categoryName = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.status = Status.ERROR;
      });
  },
});

export const { setCategoryId, setCategoryName } = filterSlice.actions;

export const selectorCategories = (state: RootState) => state.filter;

export default filterSlice.reducer;
