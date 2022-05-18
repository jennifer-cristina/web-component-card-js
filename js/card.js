'use strict' 

class card extends HTMLElement {

    // criando o construtor da classe chamado de build 
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'})
    }

    // attachShadow: método anexa uma árvore shadow DOM ao elemento especificado e retorna uma referência ao seu arquivo ShadowRoot.
    connectedCallback() {
        this.shadow.appendChild(this.styles())
        this.shadow.appendChild(this.createCard())
    }

    // Estilização da div criada
    styles() {
        const style = document.createElement('style')

        style.textContent = `
            .card {
                width: ${this.modifySize()};
                height: ${this.modifySize()};
            
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
                background-color: ${this.bgColor()};
            }
            
            .card-text {
                width: 50%;
                padding: 4px;
                text-align: center;
                color: #fff;
                text-transform: uppercase ;
                letter-spacing: 1px;
                border-radius: 12px;
                box-shadow: 0 0 2px black;
            }
            
            .card-image {
                width: 50%;
                height: 50%;
                border-radius: 50%;
                background-image: url('${this.insertImage()}');
                background-size: cover;
                box-shadow: inset 0 0 8px black;
                transition: 1s;
            } 

            .card-image:hover{
                box-shadow: inset 0 0 90px black;
            }
        `

        return style
    }

    // Criação da div Card
    createCard() {

        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
            <div class="card-text">${this.insertName()}</div>
            <div class="card-image"></div>
            <div class="card-text">${this.insertClass()}</div>
        `

        return card
    }

    // Alteração de cor 
    bgColor() {
        const color = this.getAttribute('data-bgColor')?? "cornflowerblue"

        return color
    }

    // Alteração de nome do aluno no Card
    insertName() {
        let name = this.getAttribute('data-text-name') ?? "Jennifer"

        if(name.length > 20){
            alert('name exceeded')
            name = "unknown"
        }

        return name
    }

    // Alteração de imagem do aluno no Card
    insertImage() {
        const image = this.getAttribute('data-image') ?? "1.png"

        return image
    }

    // Alteração de turma do aluno no Card
    insertClass() {
        const team = this.getAttribute('data-text-class') ?? "DS2T"

        if(team.length > 5){
            alert('non-existent class')
            team = "Class"
        }
        
        return team
    }

    // Alterção da largura do Card
    modifySize() {
        let size = this.getAttribute('data-size') ?? "250px"

        if(parseInt(size) > 500 || parseInt(size) < 200){
            alert('size exceeded')
            size = "250px"
        }

        return size
    }

}

customElements.define('card-aluno', card)
