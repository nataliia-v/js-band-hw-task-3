import LocalStorageService from '../services/LocalStorageService';

const localStorageService = new LocalStorageService();

export default (tableCreator, dataId, tableContainerId) => {
  const root = document.getElementById('root');
  const tableContainer = document.createElement('div');
  tableContainer.id = tableContainerId;
  root.appendChild(tableContainer);

  return () => {
    const data = localStorageService.getItem(dataId);

    const table = tableCreator(data);

    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
  };
};
