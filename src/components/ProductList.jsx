import { useEffect, useState } from 'react';
import { fetchProducts } from './ProductApi';
 
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
      setLoading(false);
    };
    getProducts();
  }, []);
 
  return (
<div className="App">
<h1>Welcome to Our eCommerce Site</h1>
      {loading ? (
<p>Loading products...</p>
      ) : (
<div className="product-list">
          {products.map((product) => (
<div key={product.id} className="product-card">
<img src={product.image} alt={product.title} />
<h3>{product.title}</h3>
<p>${product.price}</p>
<button>Add to Cart</button>
</div>
          ))}
</div>
      )}
</div>
  );
};
 
export default ProductList;