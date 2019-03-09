import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* es6에선 _가 default exports를 의미하며, 
each나 forEach는 named exports를 의미한다.
따라서 다음과 같이 default exports와 named exports를
동시에 얻는 방법도 가능하다.

//test.js
export default function(obj) {

}
export function each(obj, iterator, context){

}
export { each as forEach };

import _, { each } from 'test';
*/

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
serviceWorker.unregister();
