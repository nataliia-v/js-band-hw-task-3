import getCostOfDeliveryFields from './getCostOfDeliveryFields';
import formBuilder from './formBuilder';
import { COSTS_OF_DELIVERY_STORAGE_KEY } from '../constants';
import CostDelivery from '../../models/CostDelivery';

export default () => {
  const costOfDeliveryFormContainer = document.createElement('div');
  costOfDeliveryFormContainer.className = 'costOfDeliveryContainer';

  const formsContainer = document.querySelector('.formsContainer');
  formsContainer.appendChild(costOfDeliveryFormContainer);

  return renderTable => {
    const costOfDeliveryForm = formBuilder(
      COSTS_OF_DELIVERY_STORAGE_KEY,
      CostDelivery,
      getCostOfDeliveryFields(),
      renderTable,
    );

    costOfDeliveryFormContainer.innerHTML = '';

    costOfDeliveryFormContainer.appendChild(costOfDeliveryForm);
  };
};
