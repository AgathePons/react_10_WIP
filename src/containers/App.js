import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRecipesFetched } from 'src/selectors/recipes';
import { actionRequestRecipesList } from 'src/actions/recipes';

import Loading from 'src/components/App/Loading';
import App from 'src/components/App';

function AppContainer() {
  const dispatch = useDispatch();
  const recipesFetched = useSelector(selectRecipesFetched);

  useEffect(() => {
    dispatch(actionRequestRecipesList());
  }, []);

  if (!recipesFetched) {
    return <Loading />;
  }
  return (
    <App isLoaded={recipesFetched} />
  );
}

export default AppContainer;
