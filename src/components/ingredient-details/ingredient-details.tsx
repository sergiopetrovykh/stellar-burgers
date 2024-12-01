import { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { Preloader } from '../ui/preloader';
import { IngredientDetailsUI } from '../ui/ingredient-details';
import { useParams } from 'react-router-dom';
import { RootState } from '../../services/rootReducer';
import { getIngredientsSelector } from '../../services/slices/ingredientsSlice';

export const IngredientDetails: FC = memo(() => {
  const { id } = useParams<{ id: string }>();

  /* const allIngredients = useSelector(getIngredientsSelector); */

  const { loading, buns, mains, sauces, error } = useSelector(
    (state: RootState) => state.ingredients
  );

  if (loading) return <Preloader />;
  if (error) return <p>Error: {error}</p>;

  const ingredientData = [...buns, ...mains, ...sauces].find(
    (ingredient) => ingredient._id === id
  );

  if (!ingredientData) {
    return <Preloader />;
  }

  return <IngredientDetailsUI ingredientData={ingredientData} />;
});
