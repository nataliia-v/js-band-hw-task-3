import { costOfDeliveryFields } from '../../forms/constants';
import { SHIPS_LIST_STORAGE_KEY, TRUCKS_LIST_STORAGE_KEY } from '../constants';

export default () => {
  const ships = JSON.parse(localStorage.getItem(SHIPS_LIST_STORAGE_KEY)) || [];
  const trucks = JSON.parse(localStorage.getItem(TRUCKS_LIST_STORAGE_KEY)) || [];

  const availableModels = [...ships, ...trucks].map(({ model }) => model);

  const costOfDeliveryModelField = {
    ...costOfDeliveryFields.find(field => field.name === 'model'),
    options: availableModels,
  };

  return [
    costOfDeliveryModelField,
    ...costOfDeliveryFields.filter(field => field.name !== 'model'),
  ];
};
