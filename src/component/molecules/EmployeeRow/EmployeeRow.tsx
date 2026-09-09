import Image from '../../atoms/Image/Image';
import Label from '../../atoms/Label/Label';
import Badge from '../../atoms/Badge/Badge';
import { Employee } from '../../../utils/types';

type EmployeeRowProps = {
    employee: Employee;
};

const EmployeeRow = ({ employee }: EmployeeRowProps) => {
    const { firstName, lastName, phone, image, status, company } = employee;
    return (
        <tr className="employee-row">
            <td className="employee-row-profile">
                <Image src={image || '/placeholder-avatar.png'} alt={firstName} className="employee-avatar" />
                <div className="employee-row-details">
                    <Label className="employee-name" text={firstName + ' ' + lastName} />
                </div>
            </td>
            <td>{phone || '-'}</td>
            <td>{company.department || '-'}</td>
            <td>{company.title || '-'}</td>
            <td>
                <Badge
                    text={status === 'inactive' ? 'Inactive' : 'Active'}
                    variant={status === 'inactive' ? 'secondary' : 'success'}
                />
            </td>
        </tr>
    );
};

export default EmployeeRow;
