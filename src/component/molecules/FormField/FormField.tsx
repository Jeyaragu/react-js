//@ts-expect-error
import './FormField.style.css';
import Label from "../../atoms/Label/Label";
import Input from "../../atoms/Input/Input";
type FormFieldProps = {
    labelText: string;
    htmlFor: string;
    inputName: string;
    inputId: string;
    inputType: string;
    placeHolder: string;
    inputValue: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    children?: React.ReactNode;
}

const FormField = (props: FormFieldProps) => {
    const {
        inputName,
        labelText,
        htmlFor,
        inputId,
        inputType,
        placeHolder,
        inputValue,
        onChange,
        children } = props;
    return (
        <div className="form-group">
            <Label text={labelText} htmlFor={htmlFor} />
            <Input
                id={inputId}
                name={inputName}
                type={inputType}
                placeholder={placeHolder}
                value={inputValue}
                onChange={onChange}
            />
            {children}
        </div>
    )
}
export default FormField;