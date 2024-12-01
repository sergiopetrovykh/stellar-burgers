import { test, expect, describe } from '@jest/globals';
import constructorReducer, {
  addIngredientToBasket,
  moveIngredientDown,
  moveIngredientUp,
  deleteIngredientFromBasket,
  constructorInitialState
} from './constructorSlice';
import type { constructorState } from './constructorSlice';
import { TConstructorIngredient } from '@utils-types';
import { nanoid } from '@reduxjs/toolkit';

jest.mock('@reduxjs/toolkit', () => ({
  ...jest.requireActual('@reduxjs/toolkit'),
  nanoid: jest.fn(() => 'mockedID')
}));

describe('Тестируем экшены конструктора', () => {
  const startState: constructorState = JSON.parse(
    JSON.stringify(constructorInitialState)
  );
  startState.constructorItems = {
    bun: {
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
      image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
      id: '0'
    },
    ingredients: [
      {
        _id: '643d69a5c3f7b9001cfa0943',
        name: 'Соус фирменный Space Sauce',
        type: 'sauce',
        proteins: 50,
        fat: 22,
        carbohydrates: 11,
        calories: 14,
        price: 80,
        image: 'https://code.s3.yandex.net/react/code/sauce-04.png',
        image_mobile:
          'https://code.s3.yandex.net/react/code/sauce-04-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/sauce-04-large.png',
        id: '1'
      },
      {
        _id: '643d69a5c3f7b9001cfa0941',
        name: 'Биокотлета из марсианской Магнолии',
        type: 'main',
        proteins: 420,
        fat: 142,
        carbohydrates: 242,
        calories: 4242,
        price: 424,
        image: 'https://code.s3.yandex.net/react/code/meat-01.png',
        image_mobile:
          'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png',
        id: '2'
      }
    ]
  };

  test('Тестируем экшен добавления ингредиента в бургер', () => {
    const ingredient = {
      _id: '643d69a5c3f7b9001cfa0941',
      name: 'Биокотлета из марсианской Магнолии',
      type: 'main',
      proteins: 420,
      fat: 142,
      carbohydrates: 242,
      calories: 4242,
      price: 424,
      image: 'https://code.s3.yandex.net/react/code/meat-01.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png'
    };
    const endState: constructorState = JSON.parse(JSON.stringify(startState));
    endState.constructorItems.ingredients.push({
      ...ingredient,
      id: 'mockedID'
    });

    const newState = constructorReducer(
      startState,
      addIngredientToBasket(ingredient)
    );

    expect(nanoid).toHaveBeenCalled();
    expect(newState).toEqual(endState);
  });

  test('Тестируем экшен удаления ингредиента из бургера', () => {
    const ingredientId = '1';
    const endState: constructorState = JSON.parse(JSON.stringify(startState));
    endState.constructorItems.ingredients =
      endState.constructorItems.ingredients.filter(
        (ingredient: TConstructorIngredient) => ingredient.id != ingredientId
      );

    const newState = constructorReducer(
      startState,
      deleteIngredientFromBasket(ingredientId)
    );

    expect(newState).toEqual(endState);
  });

  describe('Тесты экшенов перемещения ингренидентов в бургерев', () => {
    test('Тест перемещения ингредиента наверх', () => {
      const ingredientId = 1;
      const endState: constructorState = JSON.parse(JSON.stringify(startState));
      [
        endState.constructorItems.ingredients[ingredientId],
        endState.constructorItems.ingredients[ingredientId - 1]
      ] = [
        endState.constructorItems.ingredients[ingredientId - 1],
        endState.constructorItems.ingredients[ingredientId]
      ];

      const newState = constructorReducer(
        startState,
        moveIngredientUp(ingredientId)
      );

      expect(newState).toEqual(endState);
    });
    test('Тест перемещения ингредиента вниз', () => {
      const ingredientId = 0;
      const endState: constructorState = JSON.parse(JSON.stringify(startState));
      [
        endState.constructorItems.ingredients[ingredientId],
        endState.constructorItems.ingredients[ingredientId + 1]
      ] = [
        endState.constructorItems.ingredients[ingredientId + 1],
        endState.constructorItems.ingredients[ingredientId]
      ];

      const newState = constructorReducer(
        startState,
        moveIngredientDown(ingredientId)
      );

      expect(newState).toEqual(endState);
    });
  });
});
