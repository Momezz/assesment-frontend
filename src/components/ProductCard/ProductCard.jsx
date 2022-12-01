import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const ProductCard = ({
  title, image, id,
}) => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-shadow
  const handelClick = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <article className="product__card">
      <div>
        <img className="product__image" src={image} alt={title} />
      </div>
      <p className="product__description">{title}</p>
      <div className="product__elements">
        <div className="product__clock">
          <span>00000</span>
        </div>
        <div>
          <button
            onClick={() => { handelClick(id); }}
            type="button"
          >
            Go To Detail
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
