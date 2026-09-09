import NavMenu from "../organisms/NavMenu/NavMenu"
import LeaveManagement from "../organisms/LeaveManagement/LeaveManagement";

const LeaveManagementLayout = ({ leaves, loading, error }: any) => {
    return (
        <div>
            <NavMenu />
            <LeaveManagement leaves={leaves} loading={loading} error={error} />
        </div>
    )
}

export default LeaveManagementLayout;