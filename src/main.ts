import _ from 'lodash';
import myBody from  './body.html';
import {cube} from './math';

import(/* webpackChunkName: "app-drawer" */ './components/app-drawer');

if (process.env.NODE_ENV !== 'production') {
    console.log('In DEV mode!');
}

// document.body.innerHTML = myBody;

function component() {
    const element = document.createElement('div');
    const button = document.createElement('button');
    const br = document.createElement('br');
    const number = 5;
    
    button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = _.join(['Hello', 'webpack', `${number} cubed: `, cube(number)], ' ');
    
    element.appendChild(br);
    element.appendChild(button);
    
    button.onclick = (e) => {
        import(/* webpackChunkName: "print" */ './print')
            .then((module) => {
                const { default: print } = module;
                
                print();
            });
    }

    return element;
}

let element = component();
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print', () => {
        console.log('Accepting the updated print module!');

        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    })
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log(`SW registered: ${registration}`);
            })
            .catch((regError) => {
                console.error(`SW register failed: ${regError}`);
            });
    });
}
