const Label = ({ text, htmlFor }: any) => {
    return <label htmlFor={htmlFor}>{text}</label>;
};
export default Label;