import { findRecipe } from 'src/selectors/recipes.js';

describe('slectors recipes', () => {
  describe('findRecipes', () => {
    describe('structure', () => {
      test('is a function', () => {
        expect(typeof findRecipe).toBe('function');
      });
    })
    describe('execution', () => {
      test('should return object with key/value id and slug', () => {
        const fakeRecipes = [
          { id: 1, slug: 'foobar1' },
          { id: 42, slug: 'foobar2' },
          { id: 51, slug: 'foobar3' },
        ];
        const fakeFirstSlug = fakeRecipes[0].slug;
        const result = findRecipe(fakeRecipes, fakeFirstSlug);
        expect(typeof result).toBe('object');
        expect(result).toHaveProperty('id', 1);
        expect(result).toHaveProperty('slug', 'foobar1');
      });
      test('should return first recipe on first slug', () => {
        const fakeRecipes = [
          { id: 1, slug: 'foobar1' },
          { id: 42, slug: 'foobar2' },
          { id: 51, slug: 'foobar3' },
        ];
        const fakeFirstSlug = fakeRecipes[0].slug;
        const result = findRecipe(fakeRecipes, fakeFirstSlug);
        expect(result).toEqual(fakeRecipes[0]);
      });
      test('should return undefined on wrong slug', () => {
        const fakeRecipes = [
          { id: 1, slug: 'foobar1' },
          { id: 42, slug: 'foobar2' },
          { id: 51, slug: 'foobar3' },
        ];
        const wrongSlug = 'barfoo1';
        const result = findRecipe(fakeRecipes, wrongSlug);
        expect(result).toBeUndefined();
      });
    });
  });
});
