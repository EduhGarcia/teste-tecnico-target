const bntFibonacci = document.querySelector("#btn-verify")
const bntSearchLetter = document.querySelector("#btn-verify-string")

bntFibonacci.addEventListener('click', () => {
    const num = document.querySelector('.number-user').value
    let containerRes = document.querySelector('.res-febonacci')

    containerRes.style.color = 'green'

    const responseFibonacci = fibonacci(Number(num))
 
    if (num === '') {
        containerRes.style.color = 'red'

        containerRes.innerHTML = `
        O campo está vazio
        `
    } else if (responseFibonacci) {
        containerRes.innerHTML = `
        O número ${num} pertence a sequência de fibonacci
        `
    } else {
        containerRes.innerHTML = `
        O número ${num} não pertence a sequência de fibonacci
        `
    }
})

bntSearchLetter.addEventListener('click', () => {
    const stringUser = document.querySelector('.string-user').value
    const containerRes = document.querySelector('.res-quantity-string')

    containerRes.style.color = 'green'

    let count = 0

    for (const char of stringUser.toLowerCase()) {
        if(char === 'a') count++ 
    }

    if (count != 0) {
        containerRes.innerHTML = `
        Na palavra contém ${count} letra(s) A
        `
    } else if (stringUser == '') {
        containerRes.style.color = 'red'

        containerRes.innerHTML = `
        O campo está vazio
        `
    } else {
        containerRes.innerHTML = `
        Não contém letra A na palavra
        `
    }
})

function calcRoot(calc) {
    const raiz = Math.round(Math.sqrt(calc))
    
    return raiz*raiz === calc
}

function fibonacci(n) {
    if (calcRoot(5*n*n - 4) || calcRoot(5*n*n + 4)) return true
    
    return false
}