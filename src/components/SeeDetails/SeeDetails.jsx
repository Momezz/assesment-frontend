import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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
      {
        product
          ? (
            <article className="see-detail__card">
              <span className="see-detail__id">Id del producto: {id}</span>
              <span className="see-detail__name">Nombre del producto: {product.title}</span>
              <span className="see-detail__price">Price:{product.price}</span>
              <img className="se-detail__image" src={product.image} alt="title" />
              <p className="see-detail__desciption">Description: {product.description}</p>
              <span className="see-detail__category">Category: {product.category}</span>
              <Link className="see-detail__link" to="/">Regresar a la página principal</Link>
            </article>
          )
          : <p className="see-detail__paragraph">Cargando...</p>
      }
    </div>

  );
};

export default SeeDetails;
