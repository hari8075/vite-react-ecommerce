import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/products/productsSlice';
import Banner from '../components/Banner/Banner';
import AllProducts from '../components/AllProducts/AllProducts';
import ClientSlider from '../components/ClientSlider/ClientSlider';
import productsBanner from '../assets/images/products-banner.jpg';

const AllProductsPage = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Banner image={productsBanner} />
      <AllProducts products={products} />
      <ClientSlider />
    </>
  );
};

export default AllProductsPage;
