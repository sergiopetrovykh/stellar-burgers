import { FC, useMemo } from 'react';
import { TConstructorIngredient, TIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../services/rootReducer';

export const BurgerConstructor: FC = () => {
  // Извлекаем состояние, учитывая, что bun и ingredients находятся внутри constructorItems
  const { error, constructorItems, orderRequest, orderModalData } = useSelector(
    (state: RootState) => state.constructorBurg
  );

  const onOrderClick = () => {
    if (constructorItems.bun || orderRequest) return;
    // Здесь можно добавить логику отправки заказа
  };

  const closeOrderModal = () => {
    // Логика для закрытия модального окна
  };

  const price = useMemo(
    () =>
      (constructorItems.bun ? constructorItems.bun?.price * 2 : 0) +
      constructorItems.ingredients.reduce(
        (s: number, v: TIngredient) => s + v.price,
        0
      ),
    [constructorItems?.bun, constructorItems?.ingredients]
  );

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
