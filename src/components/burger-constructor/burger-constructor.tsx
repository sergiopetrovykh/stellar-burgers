import { FC, useMemo } from 'react';
import { TConstructorIngredient, TIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../services/rootReducer';

export const BurgerConstructor: FC = () => {
  // Извлекаем состояние, учитывая, что bun и ingredients находятся внутри constructorItems
  const { error, constructorItems, orderRequest, orderModalData } = useSelector(
    (state: RootState) => state.constructor
  );

  const { bun, ingredients } = constructorItems; // Деструктурируем bun и ingredients из constructorItems

  const onOrderClick = () => {
    if (!bun || orderRequest) return;
    // Здесь можно добавить логику отправки заказа
  };

  const closeOrderModal = () => {
    // Логика для закрытия модального окна
  };

  const price = useMemo(
    () =>
      (bun ? bun.price * 2 : 0) +
      ingredients.reduce((s: number, v: TIngredient) => s + v.price, 0),
    [bun, ingredients]
  );

  return (
    <BurgerConstructorUI
      price={price}
      orderRequest={orderRequest}
      constructorItems={{ bun, ingredients }}
      orderModalData={orderModalData}
      onOrderClick={onOrderClick}
      closeOrderModal={closeOrderModal}
    />
  );
};
