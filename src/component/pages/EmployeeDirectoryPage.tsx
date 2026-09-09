import EmployeeDirectoryLayout from "../templates/EmployeeDirectoryLayout";
import { useEmployeeDirectory } from "../../hooks/useEmployeeDirectory";

const EmployeeDirectoryPage = () => {
    const {
        isLoading,
        error,
        employeeData,
        searchTerm,
        setSearchTerm,
        currentPage,
        setCurrentPage,
        totalPages,
    } = useEmployeeDirectory();

    return (
        <EmployeeDirectoryLayout
            loading={isLoading}
            employees={employeeData}
            searchTerm={searchTerm}
            onSearchChange={(e) => setSearchTerm(e.target.value)}
            onSearchSubmit={(e) => e.preventDefault()}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            error={error}
        />
    );
};

export default EmployeeDirectoryPage