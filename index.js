// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
const I = {
  element: 'evt.data.element',
  dom: 'evt.data.element.$',
  tag: 'evt.data.element.$.tagName',
  dataname: 'uri',
  datanamePar: 'email',
};

console.log(['email', 'uri', 'ext-link'].includes(I.dataname));
