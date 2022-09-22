import { useSelector } from 'react-redux';
import { findRecipe } from 'src/selectors/recipes';
import { useParams } from 'react-router-dom';

import Recipe from 'src/components/Recipe';

function RecipeContainer() {
  const params = useParams();
  const recipe = useSelector((state) => findRecipe(state.recipes.list, params.slug));
  const favorite = useSelector((state) => !!findRecipe(state.recipes.favorites, params.slug));

  return (
    <Recipe
      recipe={recipe}
      isFavorite={favorite}
    />
  );
}

export default RecipeContainer;
