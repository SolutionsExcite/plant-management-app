// src/features/plant/pages/PlantListPage.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../../layouts/PageLayout';
import Button from '../../../components/atoms/Button';
import Spinner from '../../../components/atoms/Spinner';
import PlantCard from '../components/PlantCard';
import ConfirmDialog from '../../../components/organisms/ConfirmDialog';
import usePlants from '../hooks/usePlants';

const PlantListPage = () => {
    const { plants, isLoading, deletePlant } = usePlants();
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [plantToDelete, setPlantToDelete] = useState(null);

    const handleDeleteClick = (plantId) => {
        setPlantToDelete(plantId);
        setDeleteDialogOpen(true);
    };

    const handleDeleteConfirm = async () => {
        try {
            await deletePlant(plantToDelete);
        } catch (error) {
            console.error('Error deleting plant:', error);
        }
        setPlantToDelete(null);
        setDeleteDialogOpen(false);
    };

    return (
        <PageLayout
            title="Plants"
            description="Manage your plants collection"
            action={
                <Link to="/plants/create">
                    <Button>Add Plant</Button>
                </Link>
            }
        >
            {isLoading ? (
                <div className="flex justify-center py-10">
                    <Spinner size="lg" />
                </div>
            ) : plants.length === 0 ? (
                <div className="text-center py-10">
                    <h3 className="text-lg font-medium text-gray-900">No plants found</h3>
                    <p className="mt-1 text-sm text-gray-500">Get started by adding your first plant.</p>
                    <div className="mt-6">
                        <Link to="/plants/create">
                            <Button>Add Plant</Button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {plants.map((plant) => (
                        <PlantCard
                            key={plant.id}
                            plant={plant}
                            onDelete={handleDeleteClick}
                        />
                    ))}
                </div>
            )}

            <ConfirmDialog
                isOpen={deleteDialogOpen}
                onClose={() => setDeleteDialogOpen(false)}
                onConfirm={handleDeleteConfirm}
                title="Delete Plant"
                message="Are you sure you want to delete this plant? This action cannot be undone."
                confirmText="Delete"
                cancelText="Cancel"
            />
        </PageLayout>
    );
};

export default PlantListPage;