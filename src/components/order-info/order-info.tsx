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
  // Получаем номер заказа из параметров URL
  const orderNumber = Number(useParams().number);
  const dispatch = useDispatch();

  // Используем селекторы для получения данных из Redux store
  const { order: orderData } = useSelector(getOrderSelector);
  const ingredients: TIngredient[] = useSelector(getIngredientsSelector);

  // Загружаем данные заказа при монтировании компонента
  useEffect(() => {
    if (orderNumber) {
      dispatch(getOrderThunk(orderNumber));
    }
  }, [dispatch, orderNumber]);

  // Подготавливаем данные для отображения
  const orderInfo = useMemo(() => {
    if (!orderData || !ingredients.length) return null;

    const date = new Date(orderData.createdAt);

    type TIngredientsWithCount = {
      [key: string]: TIngredient & { count: number };
    };

    const ingredientsInfo = orderData.ingredients.reduce(
      (acc: TIngredientsWithCount, item) => {
        if (!acc[item]) {
          const ingredient = ingredients.find((ing) => ing._id === item);
          if (ingredient) {
            acc[item] = {
              ...ingredient,
              count: 1
            };
          }
        } else {
          acc[item].count++;
        }

        return acc;
      },
      {}
    );

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
