import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [productId]);

  if (!product) return <p className="loading">Loading product...</p>;

  return (
    <>
      <div className="product-detail">
        <div className="detail-card">
          <img
            src={product.images[0]}
            alt={product.title}
            className="detail-image"
          />
          <div className="detail-info">
            <h1>{product.title}</h1>
            <p className="detail-description">{product.description}</p>
            <p className="detail-price">Price: ${product.price}</p>
            <Link to="/products" className="back-button">
              ← Back to Products
            </Link>
          </div>
        </div>
      </div>
      <footer className="footer">
          © 2025 Loetphij Co. All rights reserved.
      </footer>
    </>
  );
}
