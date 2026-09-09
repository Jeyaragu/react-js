// @ts-expect-error
import './Footer.style.scss';
// Dumb component or Presentational Component
const Footer = () => {
    return (
        <footer>
            <p>© 2026 Employee Experience Portal. All rights reserved.</p>
        </footer>
    );
};

export default Footer;