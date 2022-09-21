import { createHTMLElement } from '../../utils/createHTMLElement';
import { renderGarage } from '../2.1_renderGarage/renderGarage';
import { renderWinners } from '../2.2_renderWinners/renderWinners';
import './renderPage.scss';

export const renderPage = () => {
  const wrapper = createHTMLElement('div', 'wrapper');
  /** Top Buttons */
  const menuDiv = createHTMLElement('div', 'menu');
  const toGarageBtn = createHTMLElement('button', ['button', 'garage-menu-button', 'view-active']);
  toGarageBtn.textContent = 'To garage';
  toGarageBtn.id = 'garage-menu';
  const toWinnersBtn = createHTMLElement('button', ['button', 'winners-menu-button']);
  toWinnersBtn.textContent = 'To winners';
  toWinnersBtn.id = 'winners-menu';

  /** Garage buttons & form */
  const garageView = createHTMLElement('div', 'garage-view');
  garageView.id = 'garage-view';

  const divWrapForm = createHTMLElement('div', 'form-wrapper');
  const createForm = createHTMLElement('form', 'form');
  createForm.id = 'create';
  const inputName = createHTMLElement('input', 'input');
  inputName.id = 'create-name';
  if (inputName instanceof HTMLInputElement) {
    inputName.name = 'name';
    inputName.type = 'text';
  }
  const inputColor = createHTMLElement('input', 'input');
  inputColor.id = 'create-color';
  if (inputColor instanceof HTMLInputElement) {
    inputColor.name = 'color';
    inputColor.type = 'color';
    inputColor.value = '#ffffff';
  }
  const createBtn = createHTMLElement('button', ['button', 'form-button']);
  createBtn.textContent = 'Create';
  if (createBtn instanceof HTMLButtonElement) {
    createBtn.type = 'submit';
  }

  const updateForm = createHTMLElement('form', 'form');
  updateForm.id = 'update';
  const inputNameUpdate = createHTMLElement('input', 'input');
  inputNameUpdate.id = 'update-name';
  if (inputNameUpdate instanceof HTMLInputElement) {
    inputNameUpdate.name = 'name';
    inputNameUpdate.type = 'text';
    inputNameUpdate.disabled = true;
  }
  const inputColorUpdate = createHTMLElement('input', 'input');
  inputColorUpdate.id = 'update-color';
  if (inputColorUpdate instanceof HTMLInputElement) {
    inputColorUpdate.name = 'color';
    inputColorUpdate.type = 'color';
    inputColorUpdate.value = '#ffffff';
    inputColorUpdate.disabled = true;
  }
  const updateBtn = createHTMLElement('button', ['button', 'form-button', 'update-submit']);
  updateBtn.textContent = 'Update';
  updateBtn.id = 'update-submit';
  if (updateBtn instanceof HTMLButtonElement) {
    updateBtn.type = 'submit';
    updateBtn.disabled = true;
  }

  const raceControls = createHTMLElement('div', 'race-controls');

  const raseStartBtn = createHTMLElement('button', 'race-button');
  raseStartBtn.id = 'race';
  raseStartBtn.textContent = 'Race';
  const raseResetBtn = createHTMLElement('button', 'reset-button');
  raseResetBtn.id = 'reset';
  raseResetBtn.textContent = 'Reset';
  const generateCarsBtn = createHTMLElement('button', 'generate-button');
  generateCarsBtn.id = 'generate';
  generateCarsBtn.textContent = 'Generate cars';

  /** Cars in page */
  const garageDiv = createHTMLElement('div');
  garageDiv.id = 'garage';
  garageDiv.append(renderGarage());

  /** Popup message */
  const messageDiv = createHTMLElement('div', 'message-wrapper');
  const messageParag = createHTMLElement('p', 'message');
  messageParag.id = 'message';

  /** Winners */
  const winnersViewDiv = createHTMLElement('div');
  winnersViewDiv.style.display = 'none';
  winnersViewDiv.id = 'winners-view';
  winnersViewDiv.append(renderWinners());

  // /** Bottom buttons pagination */
  const paginationDiv = createHTMLElement('div', 'pagination');
  const prevBtn = createHTMLElement('button', 'prev-button');
  prevBtn.textContent = 'Prev';
  prevBtn.id = 'prev';
  if (prevBtn instanceof HTMLButtonElement) {
    prevBtn.disabled = true;
  }
  const nextBtn = createHTMLElement('button', 'next-button');
  nextBtn.textContent = 'Next';
  nextBtn.id = 'next';
  if (nextBtn instanceof HTMLButtonElement) {
    nextBtn.disabled = true;
  }

  paginationDiv.append(prevBtn, nextBtn);
  messageDiv.append(messageParag);
  raceControls.append(raseStartBtn, raseResetBtn, generateCarsBtn);
  updateForm.append(inputNameUpdate, inputColorUpdate, updateBtn);
  createForm.append(inputName, inputColor, createBtn);
  divWrapForm.append(createForm, updateForm);
  garageView.append(
    divWrapForm,
    raceControls,
    garageDiv,
    messageDiv,
  );
  menuDiv.append(toGarageBtn, toWinnersBtn);
  wrapper.append(menuDiv, garageView, winnersViewDiv, paginationDiv);
  return wrapper;
};
