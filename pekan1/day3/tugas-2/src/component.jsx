function ProductCard(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h3>{props.productName}</h3>
      <p>Harga: Rp{props.price}</p>
      <p>Stok: {props.stock}</p>
      {props.isAvailable ? (
          <h1>Stok masih tersedia {props.stock} buah</h1>
        ) : (
          <h1 color="red">Stok habis.</h1>
        )}
    </div>
  );
}

export default ProductCard;