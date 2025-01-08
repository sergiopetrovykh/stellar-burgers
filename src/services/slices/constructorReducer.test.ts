import {
  constructorSlice,
  addIngredientToBasket,
  deleteIngredientFromBasket,
  initialState,
  moveIngredientUp,
  moveIngredientDown,
  sendOrderThunk
} from './constructorSlice';

import { itemsToAdd, itemsToMove, mockNewOrder } from './testData';

import { TConstructorIngredient, TIngredient } from '@utils-types';

describe('тесты constructorSlice', () => {
  describe('тесты для конструктора', () => {
    test('тест на добавление булки', () => {
      const bun = itemsToAdd[0];
      const action = addIngredientToBasket(bun);
      const newState = constructorSlice.reducer(initialState, action);

      expect(newState.constructorItems.bun).toEqual(
        expect.objectContaining(bun)
      );
    });

    test('тест на добавление ингредиента', () => {
      const filler = itemsToAdd[1];
      const action = addIngredientToBasket(filler);
      const newState = constructorSlice.reducer(initialState, action);

      expect(newState.constructorItems.ingredients).toEqual(
        expect.arrayContaining([expect.objectContaining(filler)])
      );
    });

    test('тест на удаление ингредиента', () => {
      const initStateIngredients = {
        ...initialState,
        constructorItems: {
          ...initialState.constructorItems,
          ingredients: [itemsToMove[1]]
        }
      };

      const newState = constructorSlice.reducer(
        initStateIngredients,
        deleteIngredientFromBasket(itemsToMove[1].id)
      );

      expect(newState.constructorItems.ingredients).toEqual([]);
    });

    describe('тесты на перемещение ингредиентов', () => {
      const previousState = {
        ...initialState,
        constructorItems: {
          bun: null,
          ingredients: itemsToMove
        }
      };

      test('перемещение ингредиента вверх', () => {
        const action = moveIngredientUp(2);
        const newState = constructorSlice.reducer(previousState, action);

        expect(newState.constructorItems.ingredients[2].id).toBe(
          previousState.constructorItems.ingredients[1].id
        );
        expect(newState.constructorItems.ingredients[1].id).toBe(
          previousState.constructorItems.ingredients[2].id
        );
      });

      test('перемещение ингредиента вниз', () => {
        const action = moveIngredientDown(1);
        const newState = constructorSlice.reducer(previousState, action);

        expect(newState.constructorItems.ingredients[1].id).toBe(
          previousState.constructorItems.ingredients[2].id
        );
        expect(newState.constructorItems.ingredients[2].id).toBe(
          previousState.constructorItems.ingredients[1].id
        );
      });
    });

    describe('тесты для нового заказа', () => {
      test('проверка состояния ожидания (pending)', () => {
        const expectedState = {
          ...initialState,
          isLoading: true
        };

        const newState = constructorSlice.reducer(initialState, {
          type: sendOrderThunk.pending.type
        });
        expect(newState).toEqual(expectedState);
      });

      test('проверка состояния отклонено (rejected)', () => {
        const errorMessage = 'Ошибка создания заказа';
        const expectedState = {
          ...initialState,
          error: errorMessage
        };

        const newState = constructorSlice.reducer(initialState, {
          type: sendOrderThunk.rejected.type,
          error: { message: errorMessage }
        });

        expect(newState).toEqual(expectedState);
      });

      test('проверка состояния выполнено (fulfilled)', () => {
        const expectedState = {
          ...initialState,
          orderModalData: mockNewOrder.orders[0]
        };

        const newState = constructorSlice.reducer(initialState, {
          type: sendOrderThunk.fulfilled.type,
          payload: { order: mockNewOrder.orders[0] }
        });

        expect(newState).toEqual(expectedState);
      });
    });
  });
});
