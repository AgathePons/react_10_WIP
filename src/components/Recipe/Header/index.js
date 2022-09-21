// == Import : npm
import { Star } from 'react-feather';
import PropTypes from 'prop-types';

// == Import : local
import './style.scss';

// == Composant
function Header({
  name, thumbnail, author, difficulty, favorite,
}) {
  return (
    <header className="presentation">
      <img
        src={thumbnail}
        alt="Bonnes crêpes"
        className="presentation-image"
      />
      <div className="presentation-content">
        <h1 className="presentation-title">{name}</h1>
        {favorite && (
          <div className="presentation-fav">
            <Star color="#ffda00" size={30} />
          </div>
        )}
        <p className="presentation-infos">{author} - {difficulty}</p>
      </div>
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  favorite: PropTypes.bool,
};

Header.defaultProps = {
  favorite: false,
};

// == Export
export default Header;
