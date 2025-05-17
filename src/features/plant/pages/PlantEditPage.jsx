// src/features/plant/pages/PlantEditPage.jsx
import { useParams, useNavigate } from 'react-router-dom';
import PageLayout from '../../../layouts/PageLayout';
import PlantForm from '../components/PlantForm';
import Spinner from '../../../components/atoms/Spinner';
import usePlants from '../hooks/usePlants';

const PlantEditPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getPlant, updatePlant, isUpdating } = usePlants();
    const { data, isLoading, isError } = getPlant(id);

    const plant = data?.data;

    const handleSubmit = async (formData) => {
        try {
            await updatePlant({ id, data: formData });
            navigate(`/plants/${id}`);
        } catch (error) {
            console.error('Error updating plant:', error);
        }
    };

    if (isLoading) {
        return (
            <PageLayout title="Edit Plant">
                <div className="flex justify-center py-10">
                    <Spinner size="lg" />
                </div>
            </PageLayout>
        );
    }

    if (isError || !plant) {
        return (
            <PageLayout title="Edit Plant">
                <div className="text-center py-10">
                    <h3 className="text-lg font-medium text-gray-900">Plant not found</h3>
                    <p className="mt-1 text-sm text-gray-500">The plant you're trying to edit doesn't exist or has been removed.</p>
                </div>
            </PageLayout>
        );
    }

    return (
        <PageLayout
            title={`Edit ${plant.name}`}
            backTo={{ href: `/plants/${id}`, label: 'Plant Details' }}
        >
            <div className="bg-white shadow rounded-lg p-6">
                <PlantForm
                    initialData={plant}
                    onSubmit={handleSubmit}
                    isLoading={isUpdating}
                />
            </div>
        </PageLayout>
    );
};

export default PlantEditPage;