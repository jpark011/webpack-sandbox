import _ from 'lodash';
import './style.css';
import logo from './melon_logo.png';
import data from './data.xml';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = logo;

    element.appendChild(myIcon);

    console.log(data);

    return element;
}

document.body.appendChild(component());
