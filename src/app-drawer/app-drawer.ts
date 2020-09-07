import htmlContent from './app-drawer.html';

const templateElement = document.createElement('template');
templateElement.innerHTML = htmlContent;

class AppDrawer extends HTMLElement {
    
    static get observedAttributes() {
        return ['disabled', 'open'];
    }
    

    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(templateElement.content.cloneNode(true));

        this.addEventListener('click', (e) => {
            if (this.disabled) {
                return;
            }
            this.toggleDrawer();
        })
    }

    get open() {
        return this.hasAttribute('open');
    }

    set open(val) {
        if (val) {
            this.setAttribute('open', '');
        } else {
            this.removeAttribute('open');
        }
        this.toggleDrawer();
    }

    get disabled() {
        return this.hasAttribute('disabled');
    }

    set disabled(val) {
        if (val) {
            this.setAttribute('disabled', '');
        } else {
            this.removeAttribute('disabled');
        }
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (this.disabled) {
            this.setAttribute('tabindex', '-1');
            this.setAttribute('aria-disabled', 'true');
        } else {
            this.setAttribute('tabindex', '0');
            this.setAttribute('aria-disabled', 'false');
        }
    }

    toggleDrawer() {

    }
}

customElements.define('app-drawer', AppDrawer);
