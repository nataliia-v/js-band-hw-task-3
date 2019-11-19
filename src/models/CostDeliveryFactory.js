import CostDelivery from './CostDelivery';

class CostDeliveryFactory {
  static create(params) {
    return new CostDelivery(params);
  }
}

export default CostDeliveryFactory;
