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

var Duplicate_Array = function (_Array, _Array2, Option) {
  try {
    console.log('start')
    if (!_Array) return [];
    console.log('1111')
    if (!_Array2) {
      console.log('ee');
      var uniqueArray = _Array.filter(function (item, pos) {
        return _Array.indexOf(item) == pos;
      });
      return uniqueArray;
    } else {
      console.log('e');
      Option = Option ? Option : { remove: !0, find: !1 };
      var commonArray = _Array.filter(function (item) {
        if (Option.remove) return _Array2.indexOf(item) == -1;
        else if (Option.find) return _Array2.indexOf(item) != -1;
      });
      return commonArray;
    }
  } catch (err) {
    console.warn(err.message);
  }
};

var arr = ['check', 'demo'];
var arr_2 = ['check'];
console.log(Duplicate_Array(arr, arr_2, {find:!0}));
