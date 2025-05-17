const PageLayout = ({
    title,
    description,
    backTo,
    action,
    children
}) => {
    return (
        <div>
            {/* Page header */}
            <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
                <div>
                    {backTo && (
                        <nav className="mb-2 flex" aria-label="Breadcrumb">
                            <ol className="flex items-center space-x-2">
                                <li>
                                    <a href={backTo.href} className="text-sm font-medium text-blue-600 hover:text-blue-700">
                                        {backTo.label}
                                    </a>
                                </li>
                                <li>
                                    <svg
                                        className="h-5 w-5 text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </li>
                                <li>
                                    <span className="text-sm font-medium text-gray-500">{title}</span>
                                </li>
                            </ol>
                        </nav>
                    )}
                    <h1 className="text-2xl font-bold leading-tight text-gray-900">{title}</h1>
                    {description && <p className="mt-2 text-sm text-gray-500">{description}</p>}
                </div>
                {action && <div className="mt-3 sm:mt-0">{action}</div>}
            </div>

            {/* Page content */}
            <div className="mt-6">{children}</div>
        </div>
    );
};

export default PageLayout;