// src/features/plant/routes.jsx
import { Route } from 'react-router-dom';
import PlantListPage from './pages/PlantListPage';
import PlantDetailPage from './pages/PlantDetailPage';
import PlantCreatePage from './pages/PlantCreatePage';
import PlantEditPage from './pages/PlantEditPage';

const PlantRoutes = [
    <Route key="plants-list" path="/plants" element={<PlantListPage />} />,
    <Route key="plants-create" path="/plants/create" element={<PlantCreatePage />} />,
    <Route key="plants-edit" path="/plants/:id/edit" element={<PlantEditPage />} />,
    <Route key="plants-detail" path="/plants/:id" element={<PlantDetailPage />} />,
];

export default PlantRoutes;