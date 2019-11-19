import CostDelivery from './CostDelivery';

class CostDeliveryFactory {
  create(params) {
    return new CostDelivery(params);
  }
}

export default CostDeliveryFactory;
