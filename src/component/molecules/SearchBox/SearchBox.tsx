// @ts-expect-error
import './SearchBox.style.scss';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';

type SearchBoxProps = {
    value?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
    className?: string;
};

const SearchBox = ({ value, placeholder = 'Search employees...', onChange, onSubmit, className }: SearchBoxProps) => {
    return (
        <form className={`search-box d-flex${className ? ` ${className}` : ''}`} onSubmit={onSubmit} role="search">
            <span className="search-box-icon" aria-hidden="true">&#128269;</span>
            <Input
                type="search"
                name="employee-search"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="form-control search-box-input"
            />
            <Button type="submit" className="btn search-box-submit" label="Search" />
        </form>
    );
};

export default SearchBox;
