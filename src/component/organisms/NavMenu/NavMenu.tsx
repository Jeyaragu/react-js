// @ts-expect-error
import './NavMenu.style.scss';
import { useSelector } from 'react-redux';
import NavItem from '../../molecules/NavItem/NavItem';

import menuConfig from '../../../utils/menuConfig';
const NavMenu = () => {
    const userState = useSelector((state: any) => state.user);
    const userRole = userState?.user?.role;
    const menu = menuConfig[userRole] || [];

    return (
        <ul className="nav-menu">
            {menu.map((item: any) => <NavItem key={item.label} label={item.label} href={item.path} />)}
        </ul>
    )
}

export default NavMenu;