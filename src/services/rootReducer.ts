import { combineReducers } from '@reduxjs/toolkit';
import ingredientsReducer from './slices/ingredientsSlice';
import userReducer from './slices/userSlice';
import ordersReducer from './slices/orderSlice';
import basketReducer from './slices/constructorSlice';
import constructorSlice from './slices/constructorSlice';
import feedReducer from './slices/feed';

// Объединяем редьюсеры в один корневой редьюсер
const rootReducer = combineReducers({
  constructorBurg: constructorSlice,
  ingredients: ingredientsReducer,
  user: userReducer,
  orders: ordersReducer,
  basket: basketReducer,
  feed: feedReducer
});

// Экспортируем тип для состояния
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
