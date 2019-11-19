export default (tableCreator, dataId, tableContainerId) => {
  const root = document.getElementById('root');
  const tableContainer = document.createElement('div');
  tableContainer.id = tableContainerId;
  root.appendChild(tableContainer);

  return () => {
    const data = JSON.parse(localStorage.getItem(dataId));

    const table = tableCreator(data);

    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
  };
};
