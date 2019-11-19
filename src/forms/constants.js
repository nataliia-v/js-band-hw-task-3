export const commonFields = [
  {
    name: 'model',
    type: 'text',
  },
  {
    name: 'producedYear',
    type: 'number',
  },
  {
    name: 'capacity',
    type: 'number',
  },
  {
    name: 'averageSpeed',
    type: 'number',
  },
];

export const shipFields = [
  {
    name: 'name',
    type: 'text',
  },
  {
    name: 'countOfTeam',
    type: 'number',
  },
];

export const TYPES_OF_GAS = ['Gasoline', 'Diesel'];

export const truckFields = [
  {
    name: 'licensePlate',
    type: 'text',
  },
  {
    name: 'typeOfGas',
    type: 'select',
    options: TYPES_OF_GAS,
  },
];

export const costOfDeliveryFields = [
  {
    name: 'model',
    type: 'select',
    options: [],
  },
  {
    name: 'cargoCost',
    type: 'number',
  },
  {
    name: 'distanceCost',
    type: 'number',
  },
];
