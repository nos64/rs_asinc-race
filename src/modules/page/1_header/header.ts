import './header.scss';

import { createHTMLElement } from '../../utils/createHTMLElement';

const header = createHTMLElement('header', 'header');
document.body.append(header);

const container = createHTMLElement('div', ['container', 'header__container']);
header.append(container);

const h1 = createHTMLElement('h1', 'header__title');
h1.textContent = 'Async Race';

container.append(h1);
