import { describe, expect, test } from '@jest/globals';
import ingredientsReducer, {
  ingredientsInitialState,
  fetchIngredients
} from './ingredientsSlice';
import { mockIngredientData } from './testData';

describe('Тесты ingredientsSlice', () => {
  test('проверка состояния ожидания (pending)', () => {
    const expectedState = {
      ...ingredientsInitialState,
      loading: true
    };

    const newState = ingredientsReducer(ingredientsInitialState, {
      type: fetchIngredients.pending.type
    });

    expect(newState).toEqual(expectedState);
  });

  test('проверка состояния отклонено (rejected)', () => {
    const errorMessage = 'Ошибка загрузки ингредиентов';
    const expectedState = {
      ...ingredientsInitialState,
      error: errorMessage
    };

    const newState = ingredientsReducer(ingredientsInitialState, {
      type: fetchIngredients.rejected.type,
      error: { message: errorMessage }
    });

    expect(newState).toEqual(expectedState);
  });

  test('проверка состояния успешной загрузки (fulfilled)', () => {
    const expectedState = {
      ...ingredientsInitialState,
      buns: [mockIngredientData.ingredients[0]],
      mains: [mockIngredientData.ingredients[1]],
      sauces: [mockIngredientData.ingredients[2]]
    };

    const newState = ingredientsReducer(ingredientsInitialState, {
      type: fetchIngredients.fulfilled.type,
      payload: mockIngredientData.ingredients
    });

    expect(newState).toEqual(expectedState);
  });
});
