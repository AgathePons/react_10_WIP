import { getHomeText } from 'src/components/Home';

describe('component:Home', () => {
  describe('func:getHomeText', () => {

    describe('structure', () => {
      test('should be a function', () => {
        expect(typeof getHomeText).toBe('function');
      });
      test('should return a string', () => {
        expect(typeof getHomeText()).toBe('string');
      });
    });

    describe('execution', () => {
      const defaultTitle = 'Decouvrez prochainement nos recettes.';
      const singleRecipeTitle = 'Découvrez notre recette préférée.';
      const twoRecipesTitle = 'Découvrez les 2 recettes préférées de O\'clock';
      const fiveRecipesTitle = 'Découvrez les 5 recettes préférées de O\'clock';
      const BIGRecipesTitle = 'Découvrez les 999999 recettes préférées de O\'clock';
      test('should return a title by default without params', () => {
        expect(getHomeText()).toEqual(defaultTitle);
      });
      test('should return default title on wrong params', () => {
        expect(getHomeText(false)).toEqual(defaultTitle);
        expect(getHomeText(42)).toEqual(defaultTitle);
        expect(getHomeText({})).toEqual(defaultTitle);
        expect(getHomeText(null)).toEqual(defaultTitle);
        expect(getHomeText(new Date)).toEqual(defaultTitle);
      });
      test('should return a title by default on empty array', () => {
        expect(getHomeText([])).toEqual(defaultTitle);
      });
      test('should return a title on one recipe', () => {
        const fakeRecipe = [{ foo: 'bar' }];
        expect(getHomeText(fakeRecipe)).toEqual(singleRecipeTitle);
      });
      test('should return a title on multiple recipes', () => {
        const fakeTwoRecipes = [{ foo: 'bar1' }, { foo: 'bar2' }];
        const fakeFiveRecipes = [{ foo: 'bar1' }, { foo: 'bar2' }, { foo: 'bar3' }, { foo: 'bar4' }, { foo: 'bar5' }];
        const fakeBIGRecipes = new Array(999999);
        fakeBIGRecipes.fill({ foo: 'bar' });
        expect(getHomeText(fakeTwoRecipes)).toEqual(twoRecipesTitle);
        expect(getHomeText(fakeFiveRecipes)).toEqual(fiveRecipesTitle);
        expect(getHomeText(fakeBIGRecipes)).toEqual(BIGRecipesTitle);
      });
    });

  })
});
