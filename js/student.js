'use strict'


// Consumindo a api

const readStudents = async() => {
    const url = 'https://testeleonid.herokuapp.com/alunos'

    const response = await fetch(url)

    const data = await response.json()

    return data

}

const createCardStudents = ({nome, turma, status, foto}) => {

    const card = document.createElement('card-aluno')
    card.setAttribute('data-text-name', nome)
    card.setAttribute('data-text-class', turma)
    card.setAttribute('data-status', status)
    card.setAttribute('data-image', foto)

    return card

}

const listStudents = async() => {
    const container = document.getElementById('container-card')

    const students = await readStudents()

    const tagCard = students.map(createCardStudents)

    container.replaceChildren(...tagCard)

}


listStudents()