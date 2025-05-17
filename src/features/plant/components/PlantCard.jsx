// src/features/plant/components/PlantCard.jsx
import { Link } from 'react-router-dom';
import CardHeader from '../../../components/molecules/CardHeader';
import Button from '../../../components/atoms/Button';

const PlantCard = ({ plant, onDelete }) => {
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
        <div className="card hover:shadow-md transition-shadow">
            <CardHeader
                title={plant.name}
                subtitle={plant.type}
                action={
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(plant.status)}`}>
                        {plant.status}
                    </div>
                }
            />

            <div className="mt-2 space-y-2">
                <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-gray-500">Location:</div>
                    <div>{plant.location}</div>

                    <div className="text-gray-500">Acquired:</div>
                    <div>{new Date(plant.acquisitionDate).toLocaleDateString()}</div>
                </div>

                {plant.notes && (
                    <div className="mt-3 text-sm">
                        <div className="text-gray-500">Notes:</div>
                        <p className="text-gray-700 mt-1">{plant.notes}</p>
                    </div>
                )}
            </div>

            <div className="mt-4 flex justify-end space-x-2">
                <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onDelete(plant.id)}
                >
                    Delete
                </Button>
                <Link to={`/plants/${plant.id}/edit`}>
                    <Button size="sm" variant="secondary">Edit</Button>
                </Link>
                <Link to={`/plants/${plant.id}`}>
                    <Button size="sm">View</Button>
                </Link>
            </div>
        </div>
    );
};

export default PlantCard;