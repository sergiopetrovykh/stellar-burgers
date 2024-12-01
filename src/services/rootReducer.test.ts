import { expect, test, describe } from '@jest/globals';
import rootReducer from './rootReducer';
import {
  constructorInitialState,
  feedInitialState,
  ingredientsInitialState,
  orderInitialState,
  userInitialState
} from '@slices';

describe('Тест корневого редьюсера', () => {
  const initialState = {
    user: { ...userInitialState },
    feed: { ...feedInitialState },
    order: { ...orderInitialState },
    ingredients: { ...ingredientsInitialState },
    constructorbg: { ...constructorInitialState }
  };
  test('Тест инициализации корневого редьюсера', () => {
    const action = { type: 'unknow_action' };
    const newState = rootReducer(undefined, action);
    expect(newState).toEqual(initialState);
  });
});
