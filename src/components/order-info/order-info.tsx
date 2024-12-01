import { FC, useMemo, useEffect } from 'react';
import { Preloader } from '../ui/preloader';
import { OrderInfoUI } from '../ui/order-info';
import { TIngredient } from '@utils-types';
import {
  getOrderThunk,
  getOrderSelector,
  getIngredientsSelector
} from '@slices';
import { useDispatch, useSelector } from '@store';
import { useParams } from 'react-router-dom';

export const OrderInfo: FC = () => {
  const orderNumber = Number(useParams().number);
  const dispatch = useDispatch();

  // Используем селекторы для получения данных
  const { order: orderData } = useSelector(getOrderSelector);
  const ingredients: TIngredient[] = useSelector(getIngredientsSelector);

  useEffect(() => {
    if (orderNumber) {
      dispatch(getOrderThunk(orderNumber));
    }
  }, [dispatch, orderNumber]);

  const orderInfo = useMemo(() => {
    if (!orderData || !ingredients.length) return null;

    const date = new Date(orderData.createdAt);

    const ingredientsInfo = orderData.ingredients.reduce<{
      [key: string]: TIngredient & { count: number };
    }>((acc, item) => {
      if (!acc[item]) {
        const ingredient = ingredients.find((ing) => ing._id === item);
        if (ingredient) {
          acc[item] = { ...ingredient, count: 1 };
        }
      } else {
        acc[item].count++;
      }
      return acc;
    }, {});

    const total = Object.values(ingredientsInfo).reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );

    return {
      ...orderData,
      ingredientsInfo,
      date,
      total
    };
  }, [orderData, ingredients]);

  if (!orderInfo) {
    return <Preloader />;
  }

  return <OrderInfoUI orderInfo={orderInfo} />;
};
