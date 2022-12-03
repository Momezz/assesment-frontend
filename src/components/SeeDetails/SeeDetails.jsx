import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import { getProduct } from '../../services/productos';
import './styles.css';

const SeeDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getProduct(id);
        setProduct(response);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [id]);
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      {
        product
          ? (
            <article className="see-detail__card">
              <div className="container__img">
                <img className="se-detail__image" src={product.image} alt="title" />
              </div>
              <div className="see-details__info">
                <span><strong className="see-detail__item">Id del producto:</strong> {id}</span>
                <span><strong className="see-detail__item">Nombre del producto:</strong> {product.title}</span>
                <span><strong className="see-detail__item">Price:</strong>{product.price}</span>
                <p><strong className="see-detail__item">Description:</strong> {product.description}</p>
                <span><strong className="see-detail__item">Category:</strong> {product.category}</span>
                <Link className="see-detail__link" to="/">Regresar a la página principal</Link>
              </div>
            </article>
          )
          : <p className="see-detail__paragraph">Cargando...</p>
      }
    </div>

  );
};

export default SeeDetails;
