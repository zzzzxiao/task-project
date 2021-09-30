import React from 'react';
import {render} from 'react-dom';
// import App from '../components/app.js';
import Root from '../routes/Root';
render(<Root />, document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
}