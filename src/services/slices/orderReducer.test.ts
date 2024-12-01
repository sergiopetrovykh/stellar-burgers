import { expect, test, describe } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import orderReducer, { getOrderThunk } from './orderSlice';

const setupStore = () =>
  configureStore({
    reducer: {
      order: orderReducer
    }
  });

describe('Тестируем экшены заказа', () => {
  describe('Получаем данные заказа', () => {
    test('Ожидаем ответ после получения данных заказа', () => {
      const store = setupStore();
      store.dispatch({ type: getOrderThunk.pending.type });
      const state = store.getState();
      expect(state.order.isLoading).toBeTruthy();
      expect(state.order.error).toBeNull();
    });
    test('Ошибка после получения данных заказа', () => {
      const store = setupStore();
      const error = 'mocked error';
      store.dispatch({
        type: getOrderThunk.rejected.type,
        error: { message: error }
      });
      const state = store.getState();
      expect(state.order.isLoading).toBeFalsy();
      expect(state.order.error).toBe(error);
    });
    test('Успех после получения данных заказа', () => {
      const mockedPayload = {
        orders: [
          {
            _id: '6746c05eb27b06001c3eb58f',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0941',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный био-марсианский бургер',
            createdAt: '2024-11-27T06:46:54.493Z',
            updatedAt: '2024-11-27T06:46:55.400Z',
            number: 60719
          }
        ]
      };
      const store = setupStore();
      store.dispatch({
        type: getOrderThunk.fulfilled.type,
        payload: mockedPayload
      });
      const state = store.getState();
      expect(state.order.isLoading).toBeFalsy();
      expect(state.order.error).toBeNull();
      expect(state.order.order).toEqual(mockedPayload.orders[0]);
    });
  });
});
