import Ship from './Ship';
import Truck from './Truck';

class TransportFactory {
  static create(type, params) {
    const defaultTransport = new Truck(params);
    /* eslint-disable indent */
    switch (type) {
      case 'ship':
        return new Ship(params);
      case 'truck':
        return new Truck(params);

      default:
        return defaultTransport;
    }
    /* eslint-enable indent */
  }
}

export default TransportFactory;
