import './renderWinners.scss';
import store from '../../utils/state';
import { createHTMLElement } from '../../utils/createHTMLElement';
import { getCarImage } from '../renderCar/getCarImage';
import { miliSeconds } from '../../utils/constants';

export const renderWinners = () => {
  const winnersWrapper = createHTMLElement('div', 'winners-wrapper');
  const winnersTitle = createHTMLElement('h1', 'winners-title');
  winnersTitle.textContent = `Winners ${store.winnersCount}`;

  const winnersTitlePage = createHTMLElement('h2', 'winners-title-page');
  winnersTitlePage.textContent = `Garage #${store.winnersPage}`;

  const winnersTable = createHTMLElement('table', 'winners-table');

  const thead = createHTMLElement('thead');
  const thNumber = createHTMLElement('th');
  thNumber.textContent = 'Number';
  const thCar = createHTMLElement('th');
  thCar.textContent = 'Car';
  const thName = createHTMLElement('th');
  thName.textContent = 'Name';
  const tableBtnWins = createHTMLElement('th', ['table-button', 'table-wins']);
  tableBtnWins.id = 'sort-by-wins';
  tableBtnWins.textContent = 'Wins';
  const tableBtnTime = createHTMLElement('th', ['table-button', 'table-wins']);
  tableBtnTime.id = 'sort-by-time';
  tableBtnTime.textContent = 'Best time (seconds)';

  const tbody = createHTMLElement('tbody');
  store.winners.forEach((winner, index) => {
    const tr = createHTMLElement('tr');
    const tdNum = createHTMLElement('td');
    tdNum.textContent = `${index + 1}`;
    const tdCarColor = createHTMLElement('td');
    tdCarColor.innerHTML = `${getCarImage(winner.car.color)}`;
    const tdName = createHTMLElement('td');
    tdName.textContent = `${winner.car.name}`;
    const tdWins = createHTMLElement('td');
    tdWins.textContent = `${winner.wins}`;
    const tdTime = createHTMLElement('td');
    tdTime.textContent = `${(winner.time / miliSeconds).toFixed(2)}`;
    tr.append(tdNum, tdCarColor, tdName, tdWins, tdTime);
    tbody.append(tr);
  });

  thead.append(thNumber, thCar, thName, tableBtnWins, tableBtnTime);
  winnersTable.append(thead, tbody);
  winnersWrapper.append(winnersTitle, winnersTitlePage, winnersTable);

  return winnersWrapper;
};
