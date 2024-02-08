const perguntas = [
    {
        pergunta: "Qual é a função do método 'getElementById' em JavaScript?",
        respostas: [
            "Selecionar um elemento pelo seu ID",
            "Selecionar um elemento pelo seu nome",
            "Selecionar um elemento pelo seu índice",
        ],
        correta: 0
    },
    {
        pergunta: "O que é 'typeof' em JavaScript?",
        respostas: [
            "Uma função que retorna o tipo de um operando",
            "Uma função que retorna o valor de uma variável",
            "Uma função que retorna a quantidade de elementos em um array",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
        respostas: [
            "Adicionar um evento a um elemento HTML",
            "Remover um evento de um elemento HTML",
            "Selecionar um elemento pelo seu ID",
        ],
        correta: 0
    },
    {
        pergunta: "Como se declara uma variável em JavaScript?",
        respostas: [
            "var",
            "let",
            "const",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do método 'querySelector' em JavaScript?",
        respostas: [
            "Selecionar um elemento pelo seu ID",
            "Selecionar um elemento pelo seu nome",
            "Selecionar um elemento usando um seletor CSS",
        ],
        correta: 2
    },
    {
        pergunta: "O que é um 'array' em JavaScript?",
        respostas: [
            "Uma coleção ordenada de dados",
            "Um tipo de dado que armazena apenas um valor",
            "Um tipo de dado que armazena uma sequência de caracteres",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador para comparar igualdade em valor e tipo em JavaScript?",
        respostas: [
            "==",
            "===",
            "!=",
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma função em JavaScript?",
        respostas: [
            "Um bloco de código que executa uma tarefa específica quando chamado",
            "Uma variável que armazena um valor",
            "Um operador que compara valores",
        ],
        correta: 0
    },
    {
        pergunta: "Como se inicia um comentário de uma linha em JavaScript?",
        respostas: [
            "//",
            "/*",
            "<!--",
        ],
        correta: 0
    },
    {
        pergunta: "O que é 'NaN' em JavaScript?",
        respostas: [
            "Um valor que representa 'não é um número'",
            "Um operador de negação lógica",
            "Um método para converter string em número",
        ],
        correta: 0
    }
];

    const quiz = document.querySelector('#quiz')
    const template = document.querySelector('template')

    const corretas = new Set( )
    const totaDePerguntas = perguntas.length
    const mostrarTotal = document.querySelector('#Acertos span')

    mostrarTotal.textContent = corretas.size + ' de ' + totaDePerguntas



    for(const item of perguntas) {

        const quizItem = template.content.cloneNode(true)
        quizItem.querySelector('h3').textContent = item.pergunta;


        for(let resposta of item.respostas ){

            const dt = quizItem.querySelector(' dl dt').cloneNode(true)
            dt.querySelector('span').textContent = resposta
            dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf   (item) ) 
            dt.querySelector('input').value = item.respostas.indexOf(resposta)


            dt.querySelector('input').onchange = (event) => {
                const estaCorreta = event.target.value == item.correta

                corretas.delete(item)
                if(estaCorreta) {
                    corretas.add(item)
                }


                mostrarTotal.textContent = corretas.size + ' de ' + totaDePerguntas


                
            }




            quizItem.querySelector('dl').appendChild(dt)
    
        
        }
        quizItem.querySelector('dl dt').remove()



    quiz.appendChild(quizItem)
    
    }