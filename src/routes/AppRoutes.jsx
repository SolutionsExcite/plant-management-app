import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// Plant routes
import PlantRoutes from '../features/plant/routes';

// Batch routes
import BatchRoutes from '../features/batch/routes';

// Variety routes
import VarietyRoutes from '../features/variety/routes';

// Watering routes
import WateringRoutes from '../features/watering/routes';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                {/* Redirect from root to plants */}
                <Route index element={<Navigate to="/plants" replace />} />

                {/* Feature routes */}
                <Route path="plants/*" element={<PlantRoutes />} />
                <Route path="batches/*" element={<BatchRoutes />} />
                <Route path="varieties/*" element={<VarietyRoutes />} />
                <Route path="watering/*" element={<WateringRoutes />} />

                {/* Fallback route */}
                <Route path="*" element={<div>Not Found</div>} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;