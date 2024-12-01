import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Preloader } from '../ui/preloader';
import { IngredientDetailsUI } from '../ui/ingredient-details';
import { useParams } from 'react-router-dom';
import { RootState } from '../../services/rootReducer';
import { getIngredientsSelector } from '../../services/slices/ingredientsSlice';

export const IngredientDetails: FC = () => {
  const { id } = useParams<{ id: string }>();

  const allIngredients = useSelector(getIngredientsSelector);
  const loading = useSelector((state: RootState) => state.ingredients.loading);
  const error = useSelector((state: RootState) => state.ingredients.error);

  if (loading) return <Preloader />;
  if (error) return <p>Error: {error}</p>;

  const ingredientData = allIngredients.find(
    (ingredient) => ingredient._id === id
  );

  if (!ingredientData) {
    return <Preloader />;
  }

  return <IngredientDetailsUI ingredientData={ingredientData} />;
};
