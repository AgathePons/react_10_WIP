import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectRecipesList } from 'src/selectors/recipes';
import { selectUserLogged } from 'src/selectors/user';

import './style.scss';

function Menu() {
  const recipes = useSelector(selectRecipesList);
  const userLogged = useSelector(selectUserLogged);
  const activeClassName = 'menu-link--active';
  const classNames = ({ isActive }) => (isActive ? `menu-link ${activeClassName}` : 'menu-link');
  return (
    <nav className="menu">
      <NavLink
        className={classNames}
        to="/"
      >
        Accueil
      </NavLink>
      {userLogged && (
        <NavLink
          className={classNames}
          to="/favorites"
        >
          Mes recettes
        </NavLink>
      )}
      {recipes.map((recipe) => (
        <NavLink
          key={recipe.id}
          className={classNames}
          to={`/recipe/${recipe.slug}`}
        >
          {recipe.title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Menu;
