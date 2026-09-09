import { useState, useEffect } from 'react';
import { employeeList } from '../services/userService';
import { Employee } from '../utils/types';

export function useEmployeeDirectory() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [employeeData, setEmployeeData] = useState<Employee[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Abort mechanism avoids race conditions from stale requests when currentPage/searchTerm change quickly
        const controller = new AbortController();
        setIsLoading(true);
        employeeList(15, (currentPage - 1) * 15, "firstName", searchTerm, controller.signal)
            .then((data) => {
                setEmployeeData(data.users);
                setTotalPages(Math.round(data.total / 15));
            })
            .catch((err) => setError(err.errorMessage || "An error occurred"))
            .finally(() => setIsLoading(false));
        return () => controller.abort();
    }, [currentPage, searchTerm]);

    return {
        isLoading,
        error,
        employeeData,
        searchTerm,
        setSearchTerm,
        currentPage,
        setCurrentPage,
        totalPages,
    };
}
