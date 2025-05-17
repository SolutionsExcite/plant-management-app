import Label from '../atoms/Label';

const FormGroup = ({
    id,
    label,
    required = false,
    children,
    error = '',
    hint = '',
    className = ''
}) => {
    return (
        <div className={`mb-4 ${className}`}>
            {label && (
                <Label htmlFor={id} required={required}>
                    {label}
                </Label>
            )}
            {hint && <p className="mt-1 text-sm text-gray-500">{hint}</p>}
            <div className="mt-1">
                {children}
            </div>
            {error && (
                <p className="mt-1 text-sm text-red-600" id={`${id}-error`}>
                    {error}
                </p>
            )}
        </div>
    );
};

export default FormGroup;