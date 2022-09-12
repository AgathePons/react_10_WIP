import { actionSetRecipesList, SET_RECIPES_LIST } from 'src/actions/recipes';

describe('actions for recipes', () => {
  describe('structure', () => {
    test('is a function', () => {
      expect(typeof actionSetRecipesList).toBe('function');
    });
    test('is a string', () => {
      expect(typeof SET_RECIPES_LIST).toBe('string');
    })
    test('actionSetRecipesList returns action', () => {
      const fakeList = [{ id: 'foobar' }];
      expect(
        actionSetRecipesList(fakeList)
      ).toEqual({
        type: SET_RECIPES_LIST,
        payload: fakeList,
      });
    });
  });
});
