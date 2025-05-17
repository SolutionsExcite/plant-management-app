const Input = ({
    id,
    name,
    type = 'text',
    placeholder = '',
    value,
    onChange,
    onBlur,
    disabled = false,
    error = '',
    className = '',
    ...props
}) => {
    const baseStyle = 'block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm';
    const errorStyle = error ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500' : '';
    const disabledStyle = disabled ? 'bg-gray-100 cursor-not-allowed' : '';

    return (
        <div>
            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled}
                className={`${baseStyle} ${errorStyle} ${disabledStyle} ${className}`}
                aria-invalid={error ? 'true' : 'false'}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-red-600" id={`${id}-error`}>
                    {error}
                </p>
            )}
        </div>
    );
};

export default Input;