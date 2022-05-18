'use strict'

import {createCard} from './card.js'

// Consumindo a api

export const readStudents = async() => {
    const url = 'https://testeleonid.herokuapp.com/alunos'

    const response = await fetch(url)

    const data = await response.json()

    return Object.keys(data.message)

}

const listStudents = async() => {
    const container = document.getElementById('container-card')

    const tagCard = imagens.message.map(createCard)

    container.replaceChildren(...tagCard)

}

listStudents()