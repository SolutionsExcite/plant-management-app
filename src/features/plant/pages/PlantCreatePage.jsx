// src/features/plant/pages/PlantCreatePage.jsx
import { useNavigate } from 'react-router-dom';
import PageLayout from '../../../layouts/PageLayout';
import PlantForm from '../components/PlantForm';
import usePlants from '../hooks/usePlants';

const PlantCreatePage = () => {
    const navigate = useNavigate();
    const { createPlant, isCreating } = usePlants();

    const handleSubmit = async (formData) => {
        try {
            await createPlant(formData);
            navigate('/plants');
        } catch (error) {
            console.error('Error creating plant:', error);
        }
    };

    return (
        <PageLayout
            title="Add New Plant"
            backTo={{ href: '/plants', label: 'Plants' }}
        >
            <div className="bg-white shadow rounded-lg p-6">
                <PlantForm onSubmit={handleSubmit} isLoading={isCreating} />
            </div>
        </PageLayout>
    );
};

export default PlantCreatePage;