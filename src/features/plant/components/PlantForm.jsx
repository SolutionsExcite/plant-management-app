// Completing src/features/plant/components/PlantForm.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/atoms/Button';
import Input from '../../../components/atoms/Input';
import FormGroup from '../../../components/molecules/FormGroup';

const PlantForm = ({ initialData = {}, onSubmit, isLoading }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        type: '',
        status: 'Active',
        acquisitionDate: new Date().toISOString().split('T')[0],
        location: '',
        notes: '',
        ...initialData,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Clear error when field is edited
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: '',
            }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.type.trim()) newErrors.type = 'Type is required';
        if (!formData.status.trim()) newErrors.status = 'Status is required';
        if (!formData.acquisitionDate) newErrors.acquisitionDate = 'Acquisition date is required';
        if (!formData.location.trim()) newErrors.location = 'Location is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSubmit(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <FormGroup
                id="name"
                label="Plant Name"
                required
                error={errors.name}
            >
                <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter plant name"
                    error={errors.name}
                />
            </FormGroup>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormGroup
                    id="type"
                    label="Plant Type"
                    required
                    error={errors.type}
                >
                    <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className={`block w-full rounded-md border ${errors.type ? 'border-red-300' : 'border-gray-300'
                            } shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
                    >
                        <option value="">Select type</option>
                        <option value="Foliage">Foliage</option>
                        <option value="Succulent">Succulent</option>
                        <option value="Tree">Tree</option>
                        <option value="Vine">Vine</option>
                        <option value="Herb">Herb</option>
                        <option value="Flower">Flower</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.type && <p className="mt-1 text-sm text-red-600">{errors.type}</p>}
                </FormGroup>

                <FormGroup
                    id="status"
                    label="Status"
                    required
                    error={errors.status}
                >
                    <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className={`block w-full rounded-md border ${errors.status ? 'border-red-300' : 'border-gray-300'
                            } shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
                    >
                        <option value="Active">Active</option>
                        <option value="Dormant">Dormant</option>
                        <option value="Sick">Sick</option>
                        <option value="Dead">Dead</option>
                    </select>
                    {errors.status && <p className="mt-1 text-sm text-red-600">{errors.status}</p>}
                </FormGroup>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormGroup
                    id="acquisitionDate"
                    label="Acquisition Date"
                    required
                    error={errors.acquisitionDate}
                >
                    <Input
                        id="acquisitionDate"
                        name="acquisitionDate"
                        type="date"
                        value={formData.acquisitionDate}
                        onChange={handleChange}
                        error={errors.acquisitionDate}
                    />
                </FormGroup>

                <FormGroup
                    id="location"
                    label="Location"
                    required
                    error={errors.location}
                >
                    <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Enter location"
                        error={errors.location}
                    />
                </FormGroup>
            </div>

            <FormGroup
                id="notes"
                label="Notes"
            >
                <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={formData.notes || ''}
                    onChange={handleChange}
                    placeholder="Enter any additional notes about this plant"
                    className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
            </FormGroup>

            <div className="flex justify-end space-x-3">
                <Button
                    type="button"
                    variant="secondary"
                    onClick={() => navigate('/plants')}
                >
                    Cancel
                </Button>
                <Button
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? 'Saving...' : initialData.id ? 'Update' : 'Create'}
                </Button>
            </div>
        </form>
    );
};

export default PlantForm;