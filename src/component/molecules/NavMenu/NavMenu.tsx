// @ts-expect-error CSS imports are handled by the bundler.
import './NavMenu.style.css';
import NavItem from '../../atoms/NavItem/NavItem';
const NavMenu = () => {
    return (
        <ul className="nav-menu">
            <NavItem label="Home" href="/" />
            <NavItem label="Products" href="/products-list" />
            {/* <NavItem label="Inventory" href="/inventory" /> */}
            <NavItem label="Cart" href="/cart" />
            <NavItem label="Contact Us" href="/contact-us" />
        </ul>
    );
};

export default NavMenu;