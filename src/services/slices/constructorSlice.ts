import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TConstructorIngredient, TIngredient } from '@utils-types';
import { v4 as uuidv4 } from 'uuid';

type TConstructorState = {
  bun: TConstructorIngredient | null;
  ingredients: TConstructorIngredient[];
};

const initialState: TConstructorState = {
  bun: null,
  ingredients: []
};

export const constructorSlice = createSlice({
  name: 'constructorIngredient',
  initialState,
  reducers: {
    addItem: {
      reducer: (state, action: PayloadAction<TConstructorIngredient>) => {
        if (action.payload.type === 'bun') {
          // Заменяем текущую булочку, если уже есть
          state.bun = action.payload;
        } else {
          // Добавляем ингредиент в массив ингредиентов
          state.ingredients.push(action.payload);
        }
      },
      prepare: (ingredient: TIngredient) => {
        const id = uuidv4();
        // Создаем новый объект ингредиента с уникальным id
        return { payload: { ...ingredient, id } };
      }
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      // Удаляем ингредиент по его id
      state.ingredients = state.ingredients.filter(
        (item) => item.id !== action.payload
      );
    },
    clearAll: (state) => {
      // Сбрасываем состояние на изначальное
      state.bun = null;
      state.ingredients = [];
    },
    updateAll: (state, action: PayloadAction<TConstructorIngredient[]>) => {
      // Обновляем все ингредиенты
      state.ingredients = action.payload;
    }
  }
});

export const { addItem, deleteItem, clearAll, updateAll } =
  constructorSlice.actions;

// Селекторы
export const selectBun = (state: TConstructorState) => state.bun;
export const selectIngredients = (state: TConstructorState) =>
  state.ingredients;

export default constructorSlice.reducer;
