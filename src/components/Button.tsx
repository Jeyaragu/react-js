// Dumb component or Presentational Component
type ButtonProps = {
    name?: string;
    text?: string;
    type?: "button" | "submit" | "reset";
    style?: any
    children?: React.ReactNode;
    onClick?: (() => void);
};
const Button = (props: ButtonProps) => {
    return (
        <button
            name={props.name}
            type={props.type}
            style={props.style}
            onClick={props.onClick}
        >{props.children ? props.children : props.text}</button>
    )
}
export default Button;