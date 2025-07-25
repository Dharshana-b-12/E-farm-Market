import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>E-FarmerMarket</h1>
      {products.map(product => (
        <div key={product._id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <strong>${product.price}</strong>
        </div>
      ))}
    </div>
  );
}

export default App;
