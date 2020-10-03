/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { h, render } from 'preact';
import App from '~/components/App';

// declare global {
//   interface Window {
//   }
// }

render(h(App, null), document.getElementById('root') as HTMLElement);
