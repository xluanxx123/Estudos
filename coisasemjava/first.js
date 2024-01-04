
//PEGA IDS DO HTML
var nome = document.getElementById('nomeCompleto')
var n1 = document.getElementById('salario')
var bt1 = document.getElementById('botao')
//AREAS
var area = document.getElementById('area')
var area2 = document.getElementById('area2')



bt1.addEventListener('click', botao)


function botao(){
    n2 = Number(n1.value)
    nome2 = nome.value
    nome3 = nome2.replace(" ","_")
    //IMPRIME NA TELA
    area2.innerHTML = (`Olá ${nome3}, seu nome tem: ${nome3.length} letras!(contando com espaços) <br> e seu salario é: ${n2.toFixed(2)}`)
}




 //CLICKS DO MOUSE  
const a = document.getElementById("luu")

a.addEventListener("click", clicar)
a.addEventListener('mouseover', entrar)
a.addEventListener('mouseout', sair)    

function clicar() {
    a.innerHTML = 'Clicou!'
    a.style.background = 'red'
    a.style.border = '10px'
}

function entrar(){
    a.innerHTML = 'Entrou!'
    a.style.background = 'yellow'
}
function sair(){
    a.innerHTML = 'Saiu!'
    a.style.background = 'green'
    a.style.borderRadius = '0'
}