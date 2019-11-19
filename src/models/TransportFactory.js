import Ship from './Ship.js';
import Truck from './Truck.js';

class TransportFactory {
  static create(type, params) {
    const defaultTransport = new Truck(params);

    switch (type) {
      case 'ship':
        return new Ship(params);
      case 'truck':
        return new Truck(params);

      default:
        return defaultTransport;
    }
  }
}

export default TransportFactory;
