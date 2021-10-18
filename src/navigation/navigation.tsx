import logo from '../assets/logo.svg';
import cart from '../assets/icon-cart.svg';
import avatar from '../assets/image-avatar.png';
import './navigation.scss';

function Navigation() {
    return (
        <nav id="navigation">
            <img id="logo" src={logo} alt="sneakers logo" />

            <div id="nav-links">
                <ul>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

            </div>

            <div id="icons-container">
                <img id="cart-icon" src={cart} alt="shopping cart" />
                <img id="profile-avatar" src={avatar} alt="user avatar" />
            </div>

        </nav>
    );
}

export default Navigation;