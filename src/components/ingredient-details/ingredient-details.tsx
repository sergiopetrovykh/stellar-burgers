import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Preloader } from '../ui/preloader';
import { IngredientDetailsUI } from '../ui/ingredient-details';
import { useParams } from 'react-router-dom';
import { getIngredientsSelector } from '../../services/slices/ingredientsSlice';

export const IngredientDetails: FC = () => {
  const { id } = useParams<{ id: string }>(); // Получаем id ингредиента из параметров маршрута

  // Собираем все ингредиенты из состояния Redux
  // const allIngredients = useSelector((state: RootState) => [
  //   ...state.ingredients.buns,
  //   ...state.ingredients.mains,
  //   ...state.ingredients.sauces
  // ]);

  // Используем мемоизированный селектор
  const allIngredients = useSelector(getIngredientsSelector);

  // Ищем ингредиент по id
  const ingredientData = [...allIngredients].find(
    (ingredient) => ingredient._id === id
  );

  // Если ингредиент не найден, показываем лоадер
  if (!ingredientData) {
    return <Preloader />;
  }

  return <IngredientDetailsUI ingredientData={ingredientData} />;
};
