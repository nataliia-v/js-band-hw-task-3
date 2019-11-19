import { v4 } from 'uuid';

class Transport {
  constructor({ model, producedYear, capacity, averageSpeed }) {
    this.id = v4();
    this.model = model;
    this.producedYear = producedYear;
    this.capacity = capacity;
    this.averageSpeed = averageSpeed;
  }

  showCapacityInPounds() {
    return this.capacity * 2.20462;
  }
}

export default Transport;
