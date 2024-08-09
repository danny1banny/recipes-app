import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const axiosFetch = async (url: string) => {
  const respones = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${url}`);
  return respones.data.meals;
};

export const fetchMeals = createAsyncThunk('meal/fetchMealStatus', axiosFetch);
