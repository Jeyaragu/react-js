type ButtonProps = {
    type: "button" | "submit" | "reset";
    name: string;
    label: string;
    onClick?: () => void;
    onSubmit?: () => void;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

const Button = ({ type, name, label, onClick, onSubmit, children, style }: ButtonProps) => {
    return (
        <button
            type={type}
            name={name}
            onClick={onClick}
            onSubmit={onSubmit}
            style={style}>{label}{children}
        </button>
    )
}
export default Button;