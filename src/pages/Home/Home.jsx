import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import NavBar from '../../components/NavBar/NavBar';
import { getAllProducts } from '../../services/productos';
import './styles.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <nav className="home__nav-bar">
        <NavBar />
      </nav>
      <section className="home__grid">
        {
            products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
                rating={product.rating}
              />
            ))
          }
      </section>
    </div>
  );
};

export default Home;
