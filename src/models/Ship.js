import Transport from './Transport';

class Ship extends Transport {
  constructor({ model, producedYear, capacity, averageSpeed, name, countOfTeam }) {
    super({ model, producedYear, capacity, averageSpeed });

    this.name = name;
    this.countOfTeam = countOfTeam;
  }

  showAverageSpeed() {
    console.log(`${this.averageSpeed}nm`);
  }
}

export default Ship;
