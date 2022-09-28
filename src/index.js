import './style.css';
import '.style.js'



class kepkeret{
    #url
    #kepszelesseg
    #kepkeretvastagsag
    #kepkeretszine

    constructor (url, kepszelesseg, kepkeretvastagsag, kepkeretszine){
        this.#url=url;
        this.#kepszelesseg=kepszelesseg;
        this.#kepkeretvastagsag=kepkeretvastagsag;
        this.#kepkeretszine=kepkeretszine;
    }

    get url() {
        return this.#url;
    }
    get kepszelesseg () {
        return this.#kepszelesseg;
    }
    get kepkeretvastagsag () {
        return this.#kepkeretvastagsag;
    }
    get kepkeretszine () {
        return this.#kepkeretszine;
    }







}
