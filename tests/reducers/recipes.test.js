import reducer, { initialState } from 'src/reducers/recipes';
import { actionSetRecipesList } from 'src/actions/recipes';

// chapter https://jestjs.io/docs/api#describename-fn
describe('reducer for recipes', () => {
  // sub-chapter
  describe('structure', () => {
    // test (or it()) https://jestjs.io/docs/api#testname-fn-timeout
    test('is a function', () => {
      expect(typeof reducer).toBe('function');
      // we can have many assertions for one test
      // expect(typeof initialState).toBe('object');
    });
    test('is a function', () => {
      expect(typeof actionSetRecipesList).toBe('function');
    })
  });

  describe('execution', () => {
    test('should return initial state when called without argument', () => {
      expect(reducer()).toEqual(initialState);
    });
    it('SET_RECIPES_LIST', () => {
      // create fake variables to test the reducer on the SET_RECIPES_LIST action
      const fakeState = { toto: 123 };
      const fakeRecipes = [{ id: 'bidon' }];
      const action = actionSetRecipesList(fakeRecipes);
      // then, execute the reducer with a fake state anf fake recipes
      expect(reducer(fakeState, action)).toEqual({
        ...fakeState,
        list: fakeRecipes,
        fetched: true,
      });
    });
  });
});
