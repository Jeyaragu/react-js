import { Leave } from "../../../utils/types";
import Badge from "../../atoms/Badge/Badge";

type LeaveRowProps = {
    leave: Leave
}
const LeaveRow = ({ leave }: LeaveRowProps) => {
    const { requestId, name, leaveType, startDate, endDate, status } = leave;
    let variant: any = 'success';
    if (status === 'Pending') {
        variant = 'secondary';
    } else if (status === 'Rejected') {
        variant = 'danger';
    }
    return (
        <tr className="leave-row">
            <td>{requestId}</td>
            <td>{name}</td>
            <td>{leaveType}</td>
            <td>{startDate}</td>
            <td>{endDate}</td>
            <td>
                <Badge
                    text={status}
                    variant={variant}
                />
            </td>
        </tr>
    )
}

export default LeaveRow;