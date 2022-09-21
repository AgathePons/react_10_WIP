import { useSelector } from 'react-redux';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';
import { selectRecipesList, selectRecipesFavorites, findRecipe } from 'src/selectors/recipes';

export function getHomeText(recipes = []) {
  if (!Array.isArray(recipes) || recipes.length === 0) {
    return 'Decouvrez prochainement nos recettes.';
  }
  if (recipes.length === 1) {
    return 'Découvrez notre recette préférée.';
  }
  return `Découvrez les ${recipes.length} recettes préférées de O'clock`;
}

function Home() {
  const recipes = useSelector(selectRecipesList);
  const favorites = useSelector(selectRecipesFavorites);
  const recipesWithFavorites = recipes.map((recipe) => ({
    ...recipe,
    favorite: !!findRecipe(favorites, recipe.slug),
    // use !! to convert into bool
    // favorite: !!favorites.find((favorite) => favorite.id === recipe.id),
  }));
  return (
    <Page>
      <AppHeader />
      <Content
        title="Les recettes oRecipes"
        text={getHomeText(recipes)}
        recipes={recipesWithFavorites}
      />
    </Page>
  );
}

export default Home;
