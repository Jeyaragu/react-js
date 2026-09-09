import { useContext } from 'react';

import LeaveManagementLayout from '../templates/LeaveManagementLayout';
import { useLeaves } from '../../hooks/useLeaves';
import { LoginContext } from '../../context/LoginContext';

const LeavePage = () => {
    const { userId } = useContext(LoginContext); // Reading user id from context
    const { leaves, loading, error } = useLeaves(userId!);
    return (
        <LeaveManagementLayout leaves={leaves} loading={loading} error={error} />
    )
}

export default LeavePage;