// @ts-expect-error CSS files are handled by the bundler and have no TypeScript declarations.
import './NavItem.style.css';
import { Link } from 'react-router-dom';
const NavItem = ({ label, href }: { label: string; href: string }) => {
    return (
        <li>
            <Link to={href}>
                {label}
            </Link>
        </li>
    );
};

export default NavItem;