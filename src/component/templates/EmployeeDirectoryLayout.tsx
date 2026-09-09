import NavMenu from "../organisms/NavMenu/NavMenu";
import EmployeeDirectory from "../organisms/EmployeeDirectory/EmployeeDirectory";
import { Employee } from '../../utils/types';

type EmployeeDirectoryLayoutProps = {
    employees: Employee[];
    loading?: boolean;
    error?: string | null;
    searchTerm?: string;
    onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearchSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
    currentPage: number;
    totalPages: number;
    onPageChange?: (page: number) => void;
};

const EmployeeDirectoryLayout = (props: EmployeeDirectoryLayoutProps) => {
    return (
        <div className="employee-directory-page">
            <NavMenu />
            <EmployeeDirectory {...props} />
        </div>
    )
}
export default EmployeeDirectoryLayout;