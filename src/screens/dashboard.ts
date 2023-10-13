import { getData } from '../services/getData'
import { Attributecard } from '../components/card/card';
import "../components/export"
import { ApiType } from '../types/apiType';

class Dashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    async connectCallback() {
        const data = await getData();
        this.render(data);
    }

    render(data:any){
        if(this.shadowRoot) this.shadowRoot.innerHTML ='';
        data.forEach((e: ApiType) => {
            const card = this.ownerDocument.createElement('app-card');
            card.setAttribute(Attributecard.anime_name, e.anime_name);
            card.setAttribute(Attributecard.url, e.url);
            card.setAttribute(Attributecard.btn_text, "Dar like");
            this.shadowRoot?.appendChild(card);
        });
    }
}

customElements.define('app-dashboard', Dashboard);