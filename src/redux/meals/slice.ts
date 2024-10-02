import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TMeal, IMealSliceState, Status} from './types';
import { fetchMeals } from './fetchMeals';

const initialState: IMealSliceState = {
  id: '52771',
  items: [],
  status: Status.LOADING,

};

const mealsSlice = createSlice({
  name: 'meal',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<TMeal[]>) {
      state.items = action.payload;
    },
    setIdMeal(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeals.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchMeals.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchMeals.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const { setItems, setIdMeal } = mealsSlice.actions;

export default mealsSlice.reducer;
