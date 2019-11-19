import Transport from './Transport';

class Truck extends Transport {
  constructor({ model, producedYear, capacity, averageSpeed, licensePlate, typeOfGas }) {
    super({ model, producedYear, capacity, averageSpeed });

    this.licensePlate = licensePlate;
    this.typeOfGas = typeOfGas;
  }

  showAverageSpeed() {
    // eslint-disable-next-line no-alert
    alert(`${this.averageSpeed}km`);
  }
}

export default Truck;
