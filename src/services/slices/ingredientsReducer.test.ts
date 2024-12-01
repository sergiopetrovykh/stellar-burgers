import { expect, test, describe } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import ingredientsReducer, { fetchIngredients } from './ingredientsSlice';

const setupStore = () =>
  configureStore({
    reducer: {
      ingredients: ingredientsReducer
    }
  });

describe('Тестируем экшены ингредиентов', () => {
  describe('Получение ингридиентов', () => {
    test('Тест экшена ожидания ответ после запроса ингредиентов', () => {
      const store = setupStore();
      store.dispatch({ type: fetchIngredients.pending.type });
      const state = store.getState();
      expect(state.ingredients.loading).toBeTruthy();
      expect(state.ingredients.error).toBeNull();
    });
    test('Ошибка после запроса ингредиентов', () => {
      const store = setupStore();
      const error = 'mocked error';
      store.dispatch({
        type: fetchIngredients.rejected.type,
        error: { message: error }
      });
      const state = store.getState();
      expect(state.ingredients.loading).toBeFalsy();
      expect(state.ingredients.error).toBe(error);
    });
    test('Успешный ответ получения ингредиентов', () => {
      const mockedPayload = {
        _id: '643d69a5c3f7b9001cfa093d',
        name: 'Флюоресцентная булка R2-D3',
        type: 'bun',
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: 'https://code.s3.yandex.net/react/code/bun-01.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png'
      };
      const store = setupStore();
      store.dispatch({
        type: fetchIngredients.fulfilled.type,
        payload: mockedPayload
      });
      const state = store.getState();
      expect(state.ingredients.loading).toBeFalsy();
      expect(state.ingredients.error).toBeNull();
      expect(state.ingredients.selectedIngredient).toEqual(mockedPayload);
    });
  });
});
