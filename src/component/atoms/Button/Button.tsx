type ButtonProps = {
    className?: string;
    type: "button" | "submit" | "reset";
    name?: string;
    label?: string;
    disabled?: boolean;
    onClick?: () => void;
    onSubmit?: () => void;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

const Button = ({ type, name, label, className, disabled, onClick, onSubmit, children, style }: ButtonProps) => {
    return (
        <button
            type={type}
            name={name}
            disabled={disabled}
            onClick={onClick}
            onSubmit={onSubmit}
            className={className}
            style={style}>
            {label}{children}
        </button>
    )
}
export default Button;