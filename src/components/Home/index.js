import { useSelector } from 'react-redux';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';
import { selectRecipesList } from '../../selectors/recipes';

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
  return (
    <Page>
      <AppHeader />
      <Content
        title="Les recettes oRecipes"
        text={getHomeText(recipes)}
        recipes={recipes}
      />
    </Page>
  );
}

export default Home;
