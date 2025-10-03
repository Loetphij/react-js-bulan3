function Card(props) {
  return (
    <div style={{
        display: "flex",
        flexDirection:"column",
        border: '5px solid black', 
        padding: '20px', 
        margin: '10px', 
        borderRadius:'10px'}}>
      {props.children}
    </div>
  );
}

export default Card;

