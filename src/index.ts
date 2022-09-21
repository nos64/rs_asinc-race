import './index.html';
import './index.scss';
import { updateStateGarage } from './modules/events/updateStateGarage';
import './modules/page/page';
import { eventsListener } from './modules/events/eventsListener';

eventsListener();
await updateStateGarage();
