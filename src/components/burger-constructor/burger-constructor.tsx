import { FC, useMemo } from 'react';
import { TConstructorIngredient, TIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';
import { useSelector, useDispatch } from '@store';

// Импортируем селекторы и экшены
import {
  getConstructorSelector,
  isAuthorizedSelector,
  setOrderRequest,
  sendOrderThunk,
  setNullOrderModalData
} from '@slices';

// Импортируем хук для навигации между страницами.
import { useNavigate } from 'react-router-dom';

export const BurgerConstructor: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Получаем данные конструктора из Redux-селектора.
  const constructorState = useSelector(getConstructorSelector);

  // Проверяем, авторизован ли пользователь.
  const isAuthorized = useSelector(isAuthorizedSelector);

  // Извлекаем элементы конструктора и состояние запроса на создание заказа.
  const constructorItems = constructorState.constructorItems;
  const orderRequest = constructorState.orderRequest;

  // Получаем данные модального окна с информацией о заказе.
  const orderModalData = constructorState.orderModalData;

  // Если пользователь не авторизован, перенаправляем его на страницу логина.
  const onOrderClick = () => {
    if (constructorItems.bun && !isAuthorized) navigate('/login');
    // Если пользователь авторизован и есть булочка, создаём заказ.
    if (constructorItems.bun && isAuthorized) {
      dispatch(setOrderRequest(true));

      // Формируем массив ID ингредиентов для заказа.
      const bunId = constructorItems.bun._id;
      const ingredientsIds = constructorItems.ingredients.map(
        (ingredient) => ingredient._id
      );

      // Булочка добавляется в начало и конец массива (для верхней и нижней частей бургера).
      const order = [bunId, ...ingredientsIds, bunId];

      // Отправляем асинхронный запрос на создание заказа.
      dispatch(sendOrderThunk(order));
    }
  };

  // Обработчик закрытия модального окна с информацией о заказе.
  const closeOrderModal = () => {
    // Сбрасываем состояние запроса на создание заказа.
    dispatch(setOrderRequest(false));
    // и очищаем данные модального окна.
    dispatch(setNullOrderModalData());
  };

  // Вычисляем общую цену бургера с помощью useMemo для оптимизации.
  const price = useMemo(
    () =>
      (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
      constructorItems.ingredients.reduce(
        (s: number, v: TConstructorIngredient) => s + v.price,
        0
      ),
    [constructorItems]
  );

  // Рендер компонента BurgerConstructorUI с передачей всех необходимых данных и обработчиков.
  return (
    <BurgerConstructorUI
      price={price}
      orderRequest={orderRequest}
      constructorItems={constructorItems}
      orderModalData={orderModalData}
      onOrderClick={onOrderClick}
      closeOrderModal={closeOrderModal}
    />
  );
};
