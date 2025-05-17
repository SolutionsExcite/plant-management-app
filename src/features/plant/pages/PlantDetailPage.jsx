// src/features/plant/pages/PlantDetailPage.jsx
import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import PageLayout from '../../../layouts/PageLayout';
import Button from '../../../components/atoms/Button';
import Spinner from '../../../components/atoms/Spinner';
import ConfirmDialog from '../../../components/organisms/ConfirmDialog';
import usePlants from '../hooks/usePlants';

const PlantDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getPlant, deletePlant } = usePlants();
    const { data, isLoading, isError } = getPlant(id);

    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

    const plant = data?.data;

    const handleDeleteClick = () => {
        setDeleteDialogOpen(true);
    };

    const handleDeleteConfirm = async () => {
        try {
            await deletePlant(id);
            navigate('/plants');
        } catch (error) {
            console.error('Error deleting plant:', error);
        }
        setDeleteDialogOpen(false);
    };

    if (isLoading) {
        return (
            <PageLayout title="Plant Details">
                <div className="flex justify-center py-10">
                    <Spinner size="lg" />
                </div>
            </PageLayout>
        );
    }

    if (isError || !plant) {
        return (
            <PageLayout title="Plant Details">
                <div className="text-center py-10">
                    <h3 className="text-lg font-medium text-gray-900">Plant not found</h3>
                    <p className="mt-1 text-sm text-gray-500">The plant you're looking for doesn't exist or has been removed.</p>
                    <div className="mt-6">
                        <Link to="/plants">
                            <Button>Back to Plants</Button>
                        </Link>
                    </div>
                </div>
            </PageLayout>
        );
    }

    const getStatusColor = (status) => {
        switch (status) {
            case 'Active':
                return 'bg-green-100 text-green-800';
            case 'Dormant':
                return 'bg-yellow-100 text-yellow-800';
            case 'Sick':
                return 'bg-red-100 text-red-800';
            case 'Dead':
                return 'bg-gray-100 text-gray-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <PageLayout
            title={plant.name}
            backTo={{ href: '/plants', label: 'Plants' }}
            action={
                <div className="space-x-3">
                    <Button variant="danger" onClick={handleDeleteClick}>
                        Delete
                    </Button>
                    <Link to={`/plants/${id}/edit`}>
                        <Button variant="secondary">Edit</Button>
                    </Link>
                </div>
            }
        >
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-medium text-gray-900">Plant Information</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Details about your plant.</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(plant.status)}`}>
                        {plant.status}
                    </div>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Name</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{plant.name}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Type</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{plant.type}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Location</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{plant.location}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Acquisition Date</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {new Date(plant.acquisitionDate).toLocaleDateString()}
                            </dd>
                        </div>
                        {plant.notes && (
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Notes</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 whitespace-pre-line">{plant.notes}</dd>
                            </div>
                        )}
                    </dl>
                </div>
            </div>

            <ConfirmDialog
                isOpen={deleteDialogOpen}
                onClose={() => setDeleteDialogOpen(false)}
                onConfirm={handleDeleteConfirm}
                title="Delete Plant"
                message="Are you sure you want to delete this plant? This action cannot be undone."
                confirmText="Delete"
                cancelText="Cancel"
                variant="danger"
            />
        </PageLayout>
    );
};

export default PlantDetailPage;