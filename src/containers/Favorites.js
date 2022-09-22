import { useSelector } from 'react-redux';
import { selectRecipesFavorites } from 'src/selectors/recipes';

import Home from 'src/components/Home';

export function getHomeText(recipes = []) {
  if (!Array.isArray(recipes) || recipes.length === 0) {
    return 'Retrouvez prochainement vos recettes préférées.';
  }
  if (recipes.length === 1) {
    return 'Retrouvez votre recette préférée.';
  }
  return `Retrouvez vos ${recipes.length} recettes préférées.`;
}

function FavoritesContainer() {
  const favorites = useSelector(selectRecipesFavorites);
  const recipesWithFavorites = favorites.map((recipe) => ({
    ...recipe,
    favorite: true,
  }));
  return (
    <Home
      title="Les recettes oRecipes"
      text={getHomeText(favorites)}
      recipes={recipesWithFavorites}
    />
  );
}

export default FavoritesContainer;
