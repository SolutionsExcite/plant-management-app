const CardHeader = ({
    title,
    subtitle,
    action,
    className = ''
}) => {
    return (
        <div className={`flex justify-between items-start mb-4 ${className}`}>
            <div>
                <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
            </div>
            {action && <div>{action}</div>}
        </div>
    );
};

export default CardHeader;