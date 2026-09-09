// @ts-expect-error
import './Pagination.style.scss';
import Button from '../../atoms/Button/Button';

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange?: (page: number) => void;
    className?: string;
};

const Pagination = ({ currentPage, totalPages, onPageChange, className }: PaginationProps) => {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <nav
            className={`pagination-bar d-flex align-items-center justify-content-between${className ? ` ${className}` : ''}`}
            aria-label="Employee list pagination"
        >
            <Button
                type="button"
                className="btn pagination-nav"
                label="Previous"
                disabled={currentPage <= 1}
                onClick={() => onPageChange && onPageChange(currentPage - 1)}
            />
            <ul className="pagination mb-0">
                {pages.map((page) => (
                    <li key={page} className={`page-item${page === currentPage ? ' active' : ''}`}>
                        <Button
                            type="button"
                            className="page-link"
                            label={String(page)}
                            onClick={() => onPageChange && onPageChange(page)}
                        />
                    </li>
                ))}
            </ul>
            <Button
                type="button"
                className="btn pagination-nav"
                label="Next"
                disabled={currentPage >= totalPages}
                onClick={() => onPageChange && onPageChange(currentPage + 1)}
            />
        </nav>
    );
};

export default Pagination;
