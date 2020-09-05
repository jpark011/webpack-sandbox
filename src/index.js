import Print from './print';
import './style.css';

async function getComponent() {
    const element = document.createElement('div');
    const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
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