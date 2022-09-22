import { useSelector } from 'react-redux';
import { selectRecipesList } from 'src/selectors/recipes';
import { selectUserLogged } from 'src/selectors/user';

import Menu from 'src/components/Menu';

function MenuContainer() {
  const recipes = useSelector(selectRecipesList);
  const userLogged = useSelector(selectUserLogged);

  return (
    <Menu
      recipes={recipes}
      userLogged={userLogged}
    />
  );
}

export default MenuContainer;
