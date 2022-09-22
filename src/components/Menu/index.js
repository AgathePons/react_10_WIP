import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './style.scss';

function Menu({
  recipes,
  userLogged,
}) {
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

Menu.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  userLogged: PropTypes.bool.isRequired,
};

export default Menu;
