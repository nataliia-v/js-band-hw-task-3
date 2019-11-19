import './index.scss';
import 'normalize.css';

import formBuilder from './utils/helpers/formBuilder';
import renderTable from './utils/helpers/renderTable';
import createRenderCostOfDeliveryForm from './utils/helpers/renderCostOfDeliveryForm';
import { commonFields, shipFields, truckFields, costOfDeliveryFields } from './forms/constants';
import Ship from './models/Ship';
import Truck from './models/Truck';

import table from './components/table';
import {
  COSTS_OF_DELIVERY_STORAGE_KEY,
  SHIPS_LIST_STORAGE_KEY,
  TRUCKS_LIST_STORAGE_KEY,
} from './utils/constants';

const root = document.getElementById('root');

const formsContainer = document.createElement('div');
formsContainer.className = 'formsContainer';
root.appendChild(formsContainer);

const allShipFields = [...commonFields, ...shipFields];
const allTruckFields = [...commonFields, ...truckFields];
const shipsTableColumns = ['id', ...allShipFields.map(field => field.name)];
const truckTableColumns = ['id', ...allTruckFields.map(field => field.name)];
const costsOfDeliveryColumns = costOfDeliveryFields.map(field => field.name);

const shipsTableCreator = table('Ships List', shipsTableColumns);
const renderShipsTable = renderTable(shipsTableCreator, SHIPS_LIST_STORAGE_KEY);

const trucksTableCreator = table('Truck list', truckTableColumns);
const renderTrucksTable = renderTable(trucksTableCreator, TRUCKS_LIST_STORAGE_KEY);

const costOfDeliveryTableCreator = table('Costs Of Delivery', costsOfDeliveryColumns);
const renderCostOfDeliveryTable = renderTable(
  costOfDeliveryTableCreator,
  COSTS_OF_DELIVERY_STORAGE_KEY,
);
const renderCostOfDeliveryForm = createRenderCostOfDeliveryForm();

const shipForm = formBuilder(SHIPS_LIST_STORAGE_KEY, Ship, allShipFields, () => {
  renderShipsTable();
  renderCostOfDeliveryForm(renderCostOfDeliveryTable);
});
const truckForm = formBuilder(TRUCKS_LIST_STORAGE_KEY, Truck, allTruckFields, () => {
  renderTrucksTable();
  renderCostOfDeliveryForm(renderCostOfDeliveryTable);
});

formsContainer.appendChild(shipForm);
formsContainer.appendChild(truckForm);
renderCostOfDeliveryForm();

renderShipsTable();
renderTrucksTable();
renderCostOfDeliveryTable();
