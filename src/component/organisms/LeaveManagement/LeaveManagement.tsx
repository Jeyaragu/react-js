// @ts-expect-error
import './LeaveManagement.style.scss';

import LeaveRow from "../../molecules/LeaveRow/LeaveRow";
import { Leave } from "../../../utils/types";

type EmployeeDirectoryProps = {
    leaves: Leave[];
    loading?: boolean;
    error?: string | null;
};

const LeaveManagement = (props: EmployeeDirectoryProps) => {
    const { leaves, loading, error } = props;
    return (
        <section className="leave-management">
            <div className="leave-management-table-wrapper">
                {error && <p className="leave-management-error">{error}</p>}
                <table className="table leave-management-table">
                    <thead>
                        <tr>
                            {/* (table header) element to explicitly declare that the header cell applies to all data cells in the column below it. */}
                            <th scope="col">RequestId</th>
                            <th scope="col">Name</th>
                            <th scope="col">Leave Type</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!loading && leaves.length > 0 && leaves.map((leave) => <LeaveRow key={leave.requestId} leave={leave} />)}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default LeaveManagement;