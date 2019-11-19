export default (caption, columns) => {
  const table = document.createElement('table');
  table.classList.add('table');
  const captionElement = document.createElement('caption');
  captionElement.textContent = caption;

  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  tbody.classList.add('tbody');

  columns.forEach(column => {
    const columnCell = document.createElement('th');
    columnCell.textContent = column;
    thead.appendChild(columnCell);
  });

  table.appendChild(captionElement);
  table.appendChild(thead);
  table.appendChild(tbody);

  return data => {
    tbody.innerHTML = '';

    if (data) {
      data.forEach(dataItem => {
        const dataRow = document.createElement('tr');

        columns.forEach(column => {
          const dataCell = document.createElement('td');

          dataCell.classList.add('td');
          dataCell.textContent = dataItem[column];

          dataRow.appendChild(dataCell);
        });

        tbody.appendChild(dataRow);
      });
    } else {
      const noData = document.createElement('div');

      noData.textContent = 'No Data';

      tbody.appendChild(noData);
    }

    return table;
  };
};
