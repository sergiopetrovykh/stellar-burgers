import { expect, test, describe } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import feedReducer, { getFeedThunk, getOrdersThunk } from './feed';

const setupStore = () =>
  configureStore({
    reducer: {
      feed: feedReducer
    }
  });

describe('Тестируем ленту', () => {
  describe('Тесты экшена на получение ленты заказов', () => {
    test('Ожидаем ответ после запроса ленты', () => {
      const store = setupStore();
      store.dispatch({ type: getFeedThunk.pending.type });
      const state = store.getState();
      expect(state.feed.isLoading).toBeTruthy();
      expect(state.feed.error).toBeNull();
    });
    test('Ожидаем ошибку после запроса ленты', () => {
      const store = setupStore();
      const error = 'mocked error';
      store.dispatch({
        type: getFeedThunk.rejected.type,
        error: { message: error }
      });
      const state = store.getState();
      expect(state.feed.isLoading).toBeFalsy();
      expect(state.feed.error).toBe(error);
    });
    test('Ожидаем успешный ответ получения ленты', () => {
      const mockedPayload = {
        orders: {
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
        },
        total: 60345,
        totalToday: 80
      };
      const store = setupStore();
      store.dispatch({
        type: getFeedThunk.fulfilled.type,
        payload: mockedPayload
      });
      const state = store.getState();
      expect(state.feed.isLoading).toBeFalsy();
      expect(state.feed.error).toBeNull();
      expect(state.feed.orders).toEqual(mockedPayload.orders);
      expect(state.feed.total).toBe(mockedPayload.total);
      expect(state.feed.totalToday).toBe(mockedPayload.totalToday);
    });
  });
  describe('Тесты экшена получения ленты личного кабинета', () => {
    test('Ожидаем ответ после запроса ленты', () => {
      const store = setupStore();
      store.dispatch({ type: getOrdersThunk.pending.type });
      const state = store.getState();
      expect(state.feed.isLoading).toBeTruthy();
      expect(state.feed.error).toBeNull();
    });
    test('Ошибка после запроса ленты', () => {
      const store = setupStore();
      const error = 'mocked error';
      store.dispatch({
        type: getOrdersThunk.rejected.type,
        error: { message: error }
      });
      const state = store.getState();
      expect(state.feed.isLoading).toBeFalsy();
      expect(state.feed.error).toBe(error);
    });
    test('Успешный ответ получения ленты', () => {
      const mockedPayload = {
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
      };
      const store = setupStore();
      store.dispatch({
        type: getOrdersThunk.fulfilled.type,
        payload: mockedPayload
      });
      const state = store.getState();
      expect(state.feed.isLoading).toBeFalsy();
      expect(state.feed.error).toBeNull();
      expect(state.feed.orders).toEqual(mockedPayload);
    });
  });
});
