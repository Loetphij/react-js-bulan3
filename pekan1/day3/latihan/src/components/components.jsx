function Card(props) {
  return (
    <div style={{border: '1px solid gray', padding: '20px', margin: '10px', borderRadius:'10px'}}>
      {props.children}
    </div>
  );
}

export default Card;

