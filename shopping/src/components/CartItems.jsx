import PropTyes from "prop-types"
const CartItems = ({ cartItems }) => {
  return (
    <div>
      <h2>Items in Cart:</h2>
      <ul>
        {cartItems.map((itemId, index) => (
          <li key={index}>{itemId}</li>
        ))}
      </ul>
    </div>
  );
};

CartItems.propTypes = {
    cartItems: PropTyes.array
}
export default CartItems;
