// src/features/plant/routes.jsx
import { Routes, Route } from 'react-router-dom';
import PlantListPage from './pages/PlantListPage';
import PlantDetailPage from './pages/PlantDetailPage';
import PlantCreatePage from './pages/PlantCreatePage';
import PlantEditPage from './pages/PlantEditPage';

const PlantRoutes = () => {
    return (
        <Routes>
            <Route index element={<PlantListPage />} />
            <Route path="create" element={<PlantCreatePage />} />
            <Route path=":id/edit" element={<PlantEditPage />} />
            <Route path=":id" element={<PlantDetailPage />} />
        </Routes>
    );
};

export default PlantRoutes;