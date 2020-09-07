import htmlContent from './app-drawer.html';

const templateElement = document.createElement('template');
templateElement.innerHTML = htmlContent;

export const enum AppDrawerAttribute {
    Disabled = 'disabled',
    Open = 'open',
    TabIndex = 'tabindex',
    AriaDisabled = 'aria-disabled'
}

export class AppDrawer extends HTMLElement {
    
    static get observedAttributes() {
        return [
            AppDrawerAttribute.Disabled, 
            AppDrawerAttribute.Open
        ];
    }
    
    private _helloSlot: any;
    
    private _clickCallback(eve: Event) {
        if (this.disabled) {
            return;
        }
        this.toggleDrawer();
        console.log(this._helloSlot);
    }

    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(templateElement.content.cloneNode(true));

        this._helloSlot = this.shadowRoot?.querySelector('slot[name=hello]');
    }

    get open() {
        return this.hasAttribute(AppDrawerAttribute.Open);
    }

    set open(val) {
        if (val) {
            this.setAttribute(AppDrawerAttribute.Open, '');
        } else {
            this.removeAttribute(AppDrawerAttribute.Open);
        }
        this.toggleDrawer();
    }

    get disabled() {
        return this.hasAttribute(AppDrawerAttribute.Disabled);
    }

    set disabled(val) {
        if (val) {
            this.setAttribute(AppDrawerAttribute.Disabled, '');
        } else {
            this.removeAttribute(AppDrawerAttribute.Disabled);
        }
    }

    connectedCallback() {
        this.addEventListener('click', this._clickCallback);
    }

    disconnectedCallback() {
        this.removeEventListener('click', this._clickCallback)
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        switch (name) {
            case AppDrawerAttribute.Disabled:
                if (this.disabled) {
                    this.setAttribute(AppDrawerAttribute.TabIndex, '-1');
                    this.setAttribute(AppDrawerAttribute.AriaDisabled, 'true');
                } else {
                    this.setAttribute(AppDrawerAttribute.TabIndex, '0');
                    this.setAttribute(AppDrawerAttribute.AriaDisabled, 'false');
                }
                break;
            case AppDrawerAttribute.Open:
                // TODO
                break;

        }
    }

    toggleDrawer() {

    }
}

customElements.define('app-drawer', AppDrawer);
