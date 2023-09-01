class AppFooter extends HTMLElement {
    constructor() {
        super() ; 
        this.shadowDOM = this.attachShadow({mode:'open'}) ; 

    }
    connectedCallback() {
        this.render() ;
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                h1{
                    text-align : center ;
                }
                a{
                    color: white ; 
                    text-align : center ; 
                }
            <style>
        `; 
        
        this.shadowDOM.innerHTML += `
            <h1>Copyright Atha Rizki Pangestu 2023</h1>
            <a href="https://github.com/Attta-pangestu/">visit my github</a>
        `;

        
    }
}

customElements.define('app-footer', AppFooter) ; 

export default AppFooter ; 