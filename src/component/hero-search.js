class HeroSearch extends HTMLElement {
    constructor() {
        super() ; 
        this.shadowDOM = this.attachShadow({mode:'open'}) ; 
    }

    connectedCallback() {
        this.render() ; 
    }

    set btnClick(event) {
        this._event = event ; 
        this.search() ; 
    }

   get value() {
        return this.shadowDOM.querySelector('#search-val-hero').value ; 
    }

    search() {
         // Definisi Event Handler
        this.shadowDOM.querySelector('#search-btn-hero').addEventListener('click',this._event) ; 
    }
    

    render() {
        this.shadowDOM.innerHTML = `
        <div class="hero-search">
        <div class="hero-slogan">
            <h1>
            Cari Resep, Temukan Kelezatan!
            </h1>
        <hr>
        <p>Web app yang memudahkan Anda menemukan beragam resep masakan terbaik. Dari masakan rumahan sederhana hingga hidangan istimewa, semua ada di sini. Cari, temukan, dan sajikan kelezatan di meja makan Anda!</p>
        </div>
        <div class="search-container">
            <input type="search" placeholder="Cari resep favorit Kamu disini" id="search-val-hero">
            <button id="search-btn-hero">Cari Resep</button>
        </div>
        </div>
        `;
        this.shadowDOM.innerHTML += `
            <style>
            .hero-search {
                width: 90%;
                height: 100%;
                margin: auto;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .hero-slogan {
                display: block;
            }

            .hero-slogan > h1 {
                font-weight: 700;
                margin-bottom: 1rem;
            }

            .hero-slogan > hr {
                width: 30%;
                height: 3px;
                background-color:#8fc740 ; 
                margin : 1rem 0 ; 
            }

            .search-container {
                margin-top: 2rem;
                max-width: 800px;
                padding: 2rem;
                background-color: #fff;
                border-radius: 0.8rem;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }


            .search-container > input {
                width: 75%;
                padding: 1rem;
                border: 0;
                border-bottom: 2px solid #8fc740;
            } 

            .search-container > input:focus {
                border-bottom: 3px solid #8fc740;
                font-weight: 400;
                outline: none ; 
            }

            .search-container > button {
                color: #fff;
                font-weight: 600;
                width: 23%;
                cursor: pointer;
                padding: 1rem;
                background-color: #8fc740;
                border: 0;
                font-size: 1.2rem;
                border-radius: 0.4rem;
                margin-left: 6px;
            }

            @media screen and (max-width: 600px) {
                .search-container {
                    padding: 1rem;
                }
            
                .search-container > input {
                    width: 55%;
                    
                }
                .search-container > button {
                    width: 40%;
                }
            }

            </style>
        ` ; 
    }
}

customElements.define('hero-search', HeroSearch) ; 

export default HeroSearch ; 