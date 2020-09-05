import Print from './print';
import myBody from  './body.html'
import './style.css';
import {cube} from './math';

if (process.env.NODE_ENV !== 'production') {
    console.log('In DEV mode!');
}

document.body.innerHTML = myBody;

async function getComponent() {
    const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
    const element = document.createElement('div');
    const number = 5;

    element.innerHTML = _.join(['Hello', 'webpack', `${number} cubed: `, cube(number)], ' ');
    element.onclick = Print.bind(null, 'Hello webpack!');
    
    document.body.appendChild(element);
    
    return element;
}

let element = getComponent();

if (module.hot) {
    module.hot.accept('./print', () => {
        console.log('Accepting the updated print module!');

        document.body.removeChild(element);
        element = getComponent();
        document.body.appendChild(element);
    })
}