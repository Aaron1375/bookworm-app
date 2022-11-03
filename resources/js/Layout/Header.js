import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginDropdown from "./Header/LoginDropdown";
import LoginModal from "./Header/LoginModal";
import logoimg from "./riot.png";
function Header() {
    return (
        <nav>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#/">
                        <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={logoimg}
                        alt="BOOKWORM"
                    />  BOOKWORM</Navbar.Brand>
                    <Nav className="ml-auto navbar_warapper">
                        <Link to="/">Home</Link>
                        <Link to="/shop">Shop</Link>
                        <Link to="/about">About</Link>
                        <Link to="/cart">Cart</Link>

                        {/* <LoginDropdown/>
                        <LoginModal/> */}
                        {localStorage.getItem("user") ? (
                            <>
                                <LoginDropdown />
                            </>
                        ) : (
                            <>
                                <LoginModal />
                            </>
                        )}
                    </Nav>
                </Container>
            </Navbar>
        </nav>
    );
}

export default Header;
