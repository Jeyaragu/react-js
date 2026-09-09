import Dashboard from "../organisms/Dashboard/Dashboard";
import NavMenu from "../organisms/NavMenu/NavMenu";
const DashboardLayout = () => {
    return (
        <div>
            <NavMenu />
            <Dashboard />
        </div>
    );
};

export default DashboardLayout;