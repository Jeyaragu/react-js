// @ts-expect-error
import './EmployeeDirectory.style.scss';

import Heading from '../../atoms/Heading/Heading';
import LoadingIndicator from '../../atoms/LoadingIndicator/LoadingIndicator';
import SearchBox from '../../molecules/SearchBox/SearchBox';
import EmployeeRow from '../../molecules/EmployeeRow/EmployeeRow';
import Pagination from '../../molecules/Pagination/Pagination';
import { Employee } from '../../../utils/types';

type EmployeeDirectoryProps = {
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

const EmployeeDirectory = (props: EmployeeDirectoryProps) => {
    const {
        employees,
        loading,
        error,
        searchTerm,
        onSearchChange,
        onSearchSubmit,
        currentPage,
        totalPages,
        onPageChange
    } = props;

    return (
        <section className="employee-directory">
            <div className="employee-directory-header d-flex align-items-center justify-content-between flex-wrap gap-3">
                <Heading title="Employee Directory" level={2} />
                <SearchBox
                    value={searchTerm}
                    onChange={onSearchChange}
                    onSubmit={onSearchSubmit}
                    className="employee-directory-search"
                />
            </div>
            {error && <p className="employee-directory-message employee-directory-error">{error}</p>}
            <div className="employee-directory-table-wrapper">
                <table className="table employee-directory-table">
                    <thead>
                        <tr>
                            <th scope="col">Employee</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Department</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!loading && employees.length > 0 && employees.map((employee) => (
                            <EmployeeRow key={employee.id} employee={employee} />
                        ))}
                    </tbody>
                </table>

                {loading && (
                    <div className="employee-directory-loader" role="status" aria-label="Loading employees">
                        <LoadingIndicator color="#00BFFF" height={80} width={80} />
                    </div>
                )}
                {/* {loading && <p className="employee-directory-message">Loading employees...</p>} */}
                {!loading && !error && employees.length === 0 && (
                    <p className="employee-directory-message">No employees found.</p>
                )}
                {!loading && error && <p className="employee-directory-message employee-directory-error">{error}</p>}
            </div>

            {!loading && employees.length > 0 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                />
            )}
        </section>
    );
};

export default EmployeeDirectory;
