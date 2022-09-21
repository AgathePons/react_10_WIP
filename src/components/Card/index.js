import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Star } from 'react-feather';
import './style.scss';

function Card({
  thumbnail,
  title,
  difficulty,
  slug,
  favorite,
}) {
  return (
    <article className="card">
      <img className="card-img" src={thumbnail} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-desc">Difficulté : {difficulty}</p>
        {favorite && (
          <div className="card-fav">
            <Star color="#ffda00" size={30} />
          </div>
        )}
        <Link to={`/recipe/${slug}`} className="card-link">Voir la recette</Link>
      </div>
    </article>
  );
}

Card.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  favorite: PropTypes.bool,
};

Card.defaultProps = {
  favorite: false,
};

export default Card;
