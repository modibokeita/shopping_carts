import { useState, useEffect, useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { CardStyled } from "./styles/CardStyle";
import { ButtonStyled } from "./styles/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartItems from "./CartItems";
import { CartContext } from "./CreatContext";

const Cards = () => {
  const { addToCart } = useContext(CartContext);
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setCards(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setCards([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (id) => {
    addToCart(id);
    setCartItems([...cartItems, id]);
  };

  return (
    <div>
      <Header />
      <p>Number of Items in Cart:</p>
      <h1>
        <FontAwesomeIcon icon={faShoppingCart} /> ({cartItems.length})
      </h1>

      {loading && <div>A moment please...</div>}
      {error && <div>{`Error: ${error}`}</div>}

      <CardStyled>
        {cards.map(({ id, title, image, price, category, description }) => (
          <li key={id}>
            <img src={image} alt={title} />
            <h1>${price}</h1>
            <h2>{category}</h2>
            <p>{description}</p>
            <h3>{title}</h3>

            <ButtonStyled onClick={() => handleAddToCart(id)}>
              Add to Cart
            </ButtonStyled>
          </li>
        ))}
      </CardStyled>
      <CartItems cartItems={cartItems} />
      <Footer />
    </div>
  );
};

export default Cards;
