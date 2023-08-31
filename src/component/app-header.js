class AppHeader extends HTMLElement {
    
    constructor() {
        super() ; 
        this.shadowDOM = this.attachShadow({mode:'open'}) ; 
    }

    set btnClick (event) {
        this._event = event ; 
        this.search() ;
    }

    get value () {
        return this.shadowDOM.querySelector('#val-keyword-nav').value ; 
    }

    search () {
        return this.shadowDOM.querySelector('#search-btn-nav').addEventListener('click', this._event) ; 
    }

    connectedCallback() {
        this.render() ;
    }

    render() {
        // Import CDN iconscout 
        this.shadowDOM.innerHTML = `
        <!-- Link CDN -->
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css">
        `;

        this.shadowDOM.innerHTML += `
        <div class="nav-bar">
        <div class="logo"><img src="https://thumbs.dreamstime.com/b/recipe-word-text-green-leaf-logo-icon-design-black-background-suitable-card-typography-147082451.jpg" ></div>
        <div class="search-bar"><i class="uil uil-search"></i><input type="search" id="val-keyword-nav" placeholder="Cari inspirasi Resep Anda Disini"> <button id="search-btn-nav">Cari Resep</button> </div>
        <div class="avatar"><i class="uil uil-user"></i></div>
        </div>
        ` ;

        this.shadowDOM.innerHTML += `
        <style>
            
            /*********************
             Style Component App-Header
            *********************/

            
            
            .nav-bar {
                position: sticky;
                top: 0 ; 
                display: flex;
                width: 100%;
                background-color: black ;
                align-items: center;
                justify-content: space-around;
                gap: 0.2rem;
                padding: 0.4rem 1rem;
            }
            
            .nav-bar > .logo  {
                flex: 3;
                max-width: 175px;
            }
            
            .logo > img {
                width: 100%;
                object-fit: cover;
            }
            
            .nav-bar > .search-bar {
                flex: 8;
                background-color: white; 
                border-radius: 1rem;
                display: flex;
                justify-content: space-between;
                padding: 0.7rem ;
            }
            
            .nav-bar > .search-bar > input {
                width: 86%;
                border: none;
            }
            
            input:focus {
                outline: none;
            }
            
            .nav-bar > .search-bar > input::placeholder {
                font-size: 1rem;
                padding-left: 1rem;
            }
            
            
            .search-bar > button {
                background-color: black;
                color: white;
                padding : 0.3rem 0.5rem ; 
                border-radius: 1rem;
            }
            
            .nav-bar > .avatar {
                flex: 1;
                padding-left: 1rem;
            }
            
            .nav-bar > .avatar > i {
                font-size: 2rem;
                color: white;
            }
        </style>
        `;
    }
}

customElements.define('app-header', AppHeader) ; 

export default AppHeader ; 