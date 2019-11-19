export default (localStorageKey, getModel, fieldsConfig, onSubmit) => {
  const formRoot = document.createElement('div');
  formRoot.classList.add('formRoot');

  const form = document.createElement('form');
  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'Save';
  submitBtn.type = 'submit';

  form.addEventListener('submit', e => {
    e.preventDefault();

    const formFields = e.target.getElementsByClassName('formField-js');

    const result = {};

    Array.from(formFields).forEach(formField => {
      result[formField.name] = formField.value;
      // eslint-disable-next-line no-param-reassign
      formField.value = '';
    });

    const existedRecords = JSON.parse(localStorage.getItem(localStorageKey));

    const newItem = getModel(result);
    // method
    // console.log(newItem.showAverageSpeed());

    const newRecords = JSON.stringify(existedRecords ? [...existedRecords, newItem] : [newItem]);

    localStorage.setItem(localStorageKey, newRecords);

    if (onSubmit) onSubmit();
  });
  const formName = document.createElement('h3');
  formName.textContent = localStorageKey;
  formName.className = 'form-title';

  fieldsConfig.forEach(({ name, type, options }) => {
    const fieldRoot = document.createElement('div');
    fieldRoot.classList.add('fieldRoot');
    const label = document.createElement('label');

    label.textContent = name;

    let input;
    /* eslint-disable indent */
    switch (type) {
      case 'text':
      case 'number': {
        input = document.createElement('input');
        input.setAttribute('name', name);
        input.setAttribute('type', type);

        break;
      }
      case 'select': {
        input = document.createElement('select');
        input.setAttribute('name', name);

        options.forEach(option => {
          const optionElement = document.createElement('option');
          optionElement.value = option;
          optionElement.textContent = option;

          input.appendChild(optionElement);
        });

        break;
      }
      default: {
        input = null;
      }
    }
    /* eslint-enable indent */

    input.classList.add('formField-js');
    input.required = true;
    formRoot.appendChild(formName);
    label.appendChild(input);
    fieldRoot.appendChild(label);
    form.appendChild(fieldRoot);
    form.appendChild(submitBtn);
    formRoot.appendChild(form);
  });

  return formRoot;
};
