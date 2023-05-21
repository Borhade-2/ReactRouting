import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header=()=>{
    //instead of taking <a>tag it will load the hole page again and again we use <link to=""> this will prevent the page from flashing means it will not reload the hole page again and again instead a part of component is reloaded
    return(
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <Link to="/customers">Customers</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;