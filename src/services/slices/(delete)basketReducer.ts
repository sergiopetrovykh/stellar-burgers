/* import {
  createSlice,
  createAsyncThunk,
  createAction,
  PayloadAction
} from '@reduxjs/toolkit';
import { getOrderByNumberApi } from '@api';
import { TIngredient, TOrder } from '@utils-types';

export interface BasketState {
  ingredients: TIngredient[];
  error: string | null;
}

const initialState: BasketState = {
  ingredients: [],
  error: null
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addIngredient: (state, action: PayloadAction<TIngredient>) => {
      state.ingredients.push(action.payload);
    }
  },
  selectors: {
    getBasketSelector: (state) => state.ingredients
  }
});

export { initialState as orderInitialState };
export const { addIngredient } = basketSlice.actions;
export const { getBasketSelector } = basketSlice.selectors;

export default basketSlice.reducer;
 */
