type LabelProps = {
    text?: string;
    htmlFor?: string;
    className?: string;
    children?: React.ReactNode;
}

const Label = ({ text, htmlFor, className, children }: LabelProps) => {
    return <label className={className} htmlFor={htmlFor}>{text}{children}</label>;
};
export default Label;