// @ts-expect-error 
import './NavItem.style.scss';
import { NavLink } from 'react-router-dom';

const NavItem = ({ label, href }: { label: string; href: string }) => {
    return (
        <li className="nav-item">
            <NavLink to={href} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
                {label}
            </NavLink>
        </li>
    );
};

export default NavItem;