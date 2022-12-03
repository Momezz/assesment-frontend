import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateTime } from '../../services/productos';
import './styles.css';

const ProductCard = ({
  title, image, id,
}) => {
  const navigate = useNavigate();
  const [mins, setMinutes] = useState(generateTime(0, 5));
  const [secs, setSeconds] = useState(generateTime(0, 60));
  useEffect(() => {
    const sampleInterval = setInterval(() => {
      if (secs > 0) {
        setSeconds(secs - 1);
      }
      if (secs === 0) {
        if (mins === 0) {
          clearInterval(sampleInterval);
        } else {
          setMinutes((mins - 1));
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(sampleInterval);
    };
  });

  const handelClick = (_id) => {
    navigate(`/details/${_id}`);
  };
  return (
    <article className="product__card">
      <div>
        <img className="product__image" src={image} alt={title} />
      </div>
      <p className="product__title">{title}</p>
      <div className="product__elements">
        <div className="product__clock">
          {!(mins && secs) ? `00:00:${secs}` : (
            <p>
              {' '}
              {mins < 10 ? `00:0${mins}` : mins} : {secs < 10 || !secs ? ` 0${secs}` : `${secs}`}
              {' '}
            </p>
          )}
        </div>
        <div>
          {
            secs > 0 || mins > 0
              ? (
                <button
                  className="product__btn"
                  onClick={() => { handelClick(id); }}
                  type="button"
                >
                  Go To Detail
                </button>
              ) : (
                <button
                  className="product__btn--disabled"
                  onClick={() => { handelClick(id); }}
                  type="button"
                  disabled
                >
                  Go To Detail
                </button>
              )
          }
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
