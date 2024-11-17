import {
  createSlice,
  createAsyncThunk,
  nanoid,
  PayloadAction
} from '@reduxjs/toolkit';
import { TConstructorIngredient, TIngredient, TOrder } from '@utils-types';
import { orderBurgerApi, getOrderByNumberApi } from '@api';

export interface constructorState {
  isLoading: boolean;
  constructorItems: {
    bun: TConstructorIngredient | null;
    ingredients: TConstructorIngredient[];
  };
  orderRequest: boolean;
  orderModalData: TOrder | null;
  error: string | null;
}

const initialState: constructorState = {
  isLoading: false,
  constructorItems: {
    bun: null,
    ingredients: []
  },
  orderRequest: false,
  orderModalData: null,
  error: null
};

// Асинхронный thunk для отправки заказа
export const sendOrderThunk = createAsyncThunk(
  'constructorBurg/sendOrder',
  (data: string[]) => orderBurgerApi(data)
);

const constructorSlice = createSlice({
  name: 'constructorBurg',
  initialState,
  reducers: {
    // Добавление ингредиента в конструктор
    addIngredientToBasket: {
      reducer: (state, action) => {
        if (action.payload.type === 'bun') {
          state.constructorItems.bun = action.payload;
        } else {
          state.constructorItems.ingredients.push(action.payload);
        }
      },
      prepare: (ingredient: TIngredient) => ({
        payload: { ...ingredient, id: nanoid() },
        error: null,
        meta: null
      })
    },

    // Удаление ингредиента из конструктора
    deleteIngredientFromBasket: (state, action) => {
      state.constructorItems.ingredients =
        state.constructorItems.ingredients.filter(
          (ingredient) => ingredient.id != action.payload
        );
    },

    // Установка состояния запроса заказа
    setOrderRequest: (state, action: PayloadAction<boolean>) => {
      state.orderRequest = action.payload;
    },

    // Сброс данных модального окна заказа
    setNullOrderModalData: (state) => {
      state.orderModalData = null;
    },

    // Перемещение ингредиента вверх
    moveIngredientUp: (state, action: PayloadAction<number>) => {
      [
        state.constructorItems.ingredients[action.payload],
        state.constructorItems.ingredients[action.payload - 1]
      ] = [
        state.constructorItems.ingredients[action.payload - 1],
        state.constructorItems.ingredients[action.payload]
      ];
    },

    // Перемещение ингредиента вниз
    moveIngredientDown: (state, action: PayloadAction<number>) => {
      [
        state.constructorItems.ingredients[action.payload],
        state.constructorItems.ingredients[action.payload + 1]
      ] = [
        state.constructorItems.ingredients[action.payload + 1],
        state.constructorItems.ingredients[action.payload]
      ];
    }
  },
  selectors: {
    getConstructorSelector: (state) => state
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendOrderThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sendOrderThunk.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message as string;
      })
      .addCase(sendOrderThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.orderRequest = false;
        state.orderModalData = payload.order;
        state.constructorItems = {
          bun: null,
          ingredients: []
        };
      });
  }
});
export const { getConstructorSelector } = constructorSlice.selectors;

// Экспорт действий
export const {
  addIngredientToBasket, //добавили ингредиент в корзину
  deleteIngredientFromBasket, //удалили ингредиент из корзины
  setOrderRequest,
  setNullOrderModalData,
  moveIngredientUp,
  moveIngredientDown
} = constructorSlice.actions;

// Экспорт редюсера
export default constructorSlice.reducer;
