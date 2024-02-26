import { HeaderStyled , NavStyled} from "./styles/HeaderStyle";
//import Cards from "./Cards";
import { Link } from "react-router-dom";


const Header = () => {

    return(
        <div>
            <HeaderStyled>

                <NavStyled>

                    <ul>

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cards">Add carts</Link></li>
                    <li><Link to="/selected">See Added carts</Link></li>
                    </ul>
                </NavStyled>
            </HeaderStyled>
        </div>
    );
}

export default Header;
