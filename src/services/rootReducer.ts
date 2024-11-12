import { combineReducers } from '@reduxjs/toolkit';
import ingredientsReducer from './slices/ingredientsSlice';
import userReducer from './slices/userSlice';
import ordersReducer from './slices/orderSlice';
import basketReducer from './slices/basketReducer';

// Объединяем редьюсеры в один корневой редьюсер
const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  user: userReducer,
  orders: ordersReducer,
  basket: basketReducer
});

// Экспортируем тип для состояния
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
