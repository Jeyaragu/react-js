import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';

type FormFieldProps = {
    labelText: string;
    htmlFor: string;
    inputName: string;
    inputId: string;
    inputType: string;
    placeHolder: string;
    inputValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    children?: React.ReactNode;
}

const FormFields = (props: FormFieldProps) => {
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
        <div className="form-group mb-0">
            <Label className="form-label mb-2" text={labelText} htmlFor={htmlFor} />
            <div className="input-control">
                <Input
                    id={inputId}
                    name={inputName}
                    type={inputType}
                    placeholder={placeHolder}
                    value={inputValue}
                    onChange={onChange}
                    className="form-control"
                />
                {children}
            </div>
        </div>
    )
};

export default FormFields;
