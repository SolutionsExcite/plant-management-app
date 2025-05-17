import { Link, useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
    const location = useLocation();

    const navigation = [
        { name: 'Plants', href: '/plants', icon: 'fa-leaf' },
        { name: 'Batches', href: '/batches', icon: 'fa-layer-group' },
        { name: 'Varieties', href: '/varieties', icon: 'fa-seedling' },
        { name: 'Watering', href: '/watering', icon: 'fa-tint' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Top Header */}
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl font-bold text-gray-900">Plant Management</h1>
                        <div className="flex items-center">
                            {/* User Menu - can be expanded later */}
                            <div className="ml-4">
                                <button
                                    type="button"
                                    className="rounded-full bg-gray-100 p-1 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    <span className="sr-only">View profile</span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                {children}
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center justify-around">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`inline-flex flex-col items-center justify-center py-3 px-5 text-xs font-medium ${location.pathname.startsWith(item.href)
                                        ? 'text-blue-600'
                                        : 'text-gray-500 hover:text-gray-900'
                                    }`}
                            >
                                <svg
                                    className="h-5 w-5 mb-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    />
                                </svg>
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default MainLayout;