import { useState, useEffect ,  useContext} from "react";
import Header from "./Header";
import Footer from "./Footer";
import { CardStyled } from "./styles/CardStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "./CreatContext";
const DisplayItems = () => {

    const [cards, setCards] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { cartItems } = useContext(CartContext);

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

  // Filter the cards array to display only the items in the cart
  const selectedItems = cards.filter((card) => cartItems.includes(card.id));

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
        {selectedItems.map(({ id, title, image, price, category, description }) => (
          <li key={id}>
            <img src={image} alt={title} />
            <h1>${price}</h1>
            <h2>{category}</h2>
            <p>{description}</p>
            <h3>{title}</h3>
          </li>
        ))}
      </CardStyled>
      <Footer />
    </div>
  );
};

export default DisplayItems;
