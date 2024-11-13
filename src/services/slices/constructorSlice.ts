import {
  createSlice,
  createAsyncThunk,
  nanoid,
  PayloadAction
} from '@reduxjs/toolkit';
import { TConstructorIngredient, TIngredient, TOrder } from '@utils-types';
import { orderBurgerApi, getOrderByNumberApi } from '@api';
import { v4 as uuidv4 } from 'uuid';

// Тип состояния
type TConstructorState = {
  isLoading: boolean;
  constructorItems: {
    bun: TConstructorIngredient | null;
    ingredients: TConstructorIngredient[];
  };
  basket: {
    ingredients: TIngredient[];
    error: string | null;
  };
  orderRequest: boolean;
  orderModalData: TOrder | null;
  error: string | null;
};

// Начальное состояние
const initialState: TConstructorState = {
  isLoading: false,
  constructorItems: {
    bun: null,
    ingredients: []
  },
  basket: {
    ingredients: [],
    error: null
  },
  orderRequest: false,
  orderModalData: null,
  error: null
};

// Асинхронный thunk для отправки заказа
export const sendOrderThunk = createAsyncThunk(
  'constructor/sendOrder',
  (data: string[]) => orderBurgerApi(data)
);

const constructorSlice = createSlice({
  name: 'constructor',
  initialState,
  reducers: {
    // Добавление ингредиента в конструктор
    addItem: {
      reducer: (state, action: PayloadAction<TConstructorIngredient>) => {
        if (action.payload.type === 'bun') {
          state.constructorItems.bun = action.payload;
        } else {
          state.constructorItems.ingredients.push(action.payload);
        }
      },
      prepare: (ingredient: TIngredient) => {
        const id = uuidv4();
        return { payload: { ...ingredient, id } };
      }
    },

    // Удаление ингредиента из конструктора
    deleteItem: (state, action: PayloadAction<string>) => {
      state.constructorItems.ingredients =
        state.constructorItems.ingredients.filter(
          (item) => item.id !== action.payload
        );
    },

    // Очистка всех ингредиентов
    clearAll: (state) => {
      state.constructorItems.bun = null;
      state.constructorItems.ingredients = [];
    },

    // Обновление всех ингредиентов в конструкторе
    updateAll: (state, action: PayloadAction<TConstructorIngredient[]>) => {
      state.constructorItems.ingredients = action.payload;
    },

    // Добавление ингредиента в корзину
    addIngredientToBasket: (state, action: PayloadAction<TIngredient>) => {
      state.basket.ingredients.push(action.payload);
    },

    // Установка ошибки для корзины
    setBasketError: (state, action: PayloadAction<string | null>) => {
      state.basket.error = action.payload;
    },

    // Установка состояния запроса заказа
    setOrderRequest: (state, action: PayloadAction<boolean>) => {
      state.orderRequest = action.payload;
    },

    // Сброс данных модального окна заказа
    setNullOrderModalData: (state) => {
      state.orderModalData = null;
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
    }
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

// Экспорт действий
export const {
  addItem,
  deleteItem,
  clearAll,
  updateAll,
  addIngredientToBasket,
  setBasketError,
  setOrderRequest,
  setNullOrderModalData,
  moveIngredientDown,
  moveIngredientUp
} = constructorSlice.actions;

// Экспорт селекторов
export const selectBun = (state: TConstructorState) =>
  state.constructorItems.bun;
export const selectConstructorIngredients = (state: TConstructorState) =>
  state.constructorItems.ingredients;
export const selectBasketIngredients = (state: TConstructorState) =>
  state.basket.ingredients;
export const selectBasketError = (state: TConstructorState) =>
  state.basket.error;

// Экспорт редюсера
export default constructorSlice.reducer;
