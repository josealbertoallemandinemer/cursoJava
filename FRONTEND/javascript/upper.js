class Upper extends HTMLElement {
    constructor() {
        super();
        this.observer = new MutationObserver(() => this.sePuedeLeerElInterior());
    }

    connectedCallback() {
        this.observer.observe(this, { childList: true });
    }

    sePuedeLeerElInterior() {
        this.observer.disconnect();
        
        const texto = this.innerHTML;
        const color = this.getAttribute('color');
        

        if(color=='rojo') {
            this.innerHTML = `
                <a href="#" class="text-uppercase text-danger">${texto}</a>
                `;
        } else {
            this.innerHTML = `
            <a href="#" class="text-uppercase">${texto}</a>
                `;
        }
    }
}

customElements.define("upper-case", Upper);