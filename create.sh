#!/bin/bash

# Create directory structure
mkdir -p src/assets/images
mkdir -p src/assets/styles
mkdir -p src/components/atoms
mkdir -p src/components/molecules
mkdir -p src/components/organisms
mkdir -p src/features/plant/components
mkdir -p src/features/plant/pages
mkdir -p src/features/plant/services
mkdir -p src/features/plant/hooks
mkdir -p src/features/batch/components
mkdir -p src/features/batch/pages
mkdir -p src/features/batch/services
mkdir -p src/features/batch/hooks
mkdir -p src/features/variety/components
mkdir -p src/features/variety/pages
mkdir -p src/features/variety/services
mkdir -p src/features/variety/hooks
mkdir -p src/features/watering/components
mkdir -p src/features/watering/pages
mkdir -p src/features/watering/services
mkdir -p src/features/watering/hooks
mkdir -p src/layouts
mkdir -p src/routes
mkdir -p src/services
mkdir -p src/hooks
mkdir -p src/utils

# Create base files
touch src/assets/styles/tailwind.css
touch src/components/atoms/Button.jsx
touch src/components/atoms/Input.jsx
touch src/components/atoms/Label.jsx
touch src/components/atoms/Spinner.jsx
touch src/components/molecules/FormGroup.jsx
touch src/components/molecules/CardHeader.jsx
touch src/components/organisms/Modal.jsx
touch src/components/organisms/ConfirmDialog.jsx

# Create feature files
# Plant feature
touch src/features/plant/components/PlantCard.jsx
touch src/features/plant/components/PlantForm.jsx
touch src/features/plant/pages/PlantListPage.jsx
touch src/features/plant/pages/PlantCreatePage.jsx
touch src/features/plant/pages/PlantEditPage.jsx
touch src/features/plant/pages/PlantDetailPage.jsx
touch src/features/plant/services/plantService.js
touch src/features/plant/hooks/usePlants.js
touch src/features/plant/types.js
touch src/features/plant/routes.jsx

# Batch feature
touch src/features/batch/components/BatchCard.jsx
touch src/features/batch/components/BatchForm.jsx
touch src/features/batch/pages/BatchListPage.jsx
touch src/features/batch/pages/BatchCreatePage.jsx
touch src/features/batch/pages/BatchEditPage.jsx
touch src/features/batch/pages/BatchDetailPage.jsx
touch src/features/batch/services/batchService.js
touch src/features/batch/hooks/useBatches.js
touch src/features/batch/types.js
touch src/features/batch/routes.jsx

# Variety feature
touch src/features/variety/components/VarietyCard.jsx
touch src/features/variety/components/VarietyForm.jsx
touch src/features/variety/pages/VarietyListPage.jsx
touch src/features/variety/pages/VarietyCreatePage.jsx
touch src/features/variety/pages/VarietyEditPage.jsx
touch src/features/variety/pages/VarietyDetailPage.jsx
touch src/features/variety/services/varietyService.js
touch src/features/variety/hooks/useVarieties.js
touch src/features/variety/types.js
touch src/features/variety/routes.jsx

# Watering feature
touch src/features/watering/components/WateringCard.jsx
touch src/features/watering/components/WateringForm.jsx
touch src/features/watering/pages/WateringListPage.jsx
touch src/features/watering/pages/WateringCreatePage.jsx
touch src/features/watering/pages/WateringEditPage.jsx
touch src/features/watering/pages/WateringDetailPage.jsx
touch src/features/watering/services/wateringService.js
touch src/features/watering/hooks/useWaterings.js
touch src/features/watering/types.js
touch src/features/watering/routes.jsx

# Layout files
touch src/layouts/MainLayout.jsx
touch src/layouts/PageLayout.jsx

# Route files
touch src/routes/AppRoutes.jsx

# Service files
touch src/services/httpClient.js
touch src/services/apiConfig.js

# Hook files
touch src/hooks/useToast.js

# Utility files
touch src/utils/formatDate.js
touch src/utils/validations.js

# Root files
touch src/App.jsx
touch src/main.jsx
touch src/index.css