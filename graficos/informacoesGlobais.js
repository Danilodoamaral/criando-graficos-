const url= 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizadorInformacoesGlobais(){
const res=await fetch(url)
const dados=await res.json()
console.log(dados);
const paragrafo=document.createElement('p')
paragrafo.classList.add('graficos-container__texto')
paragrafo.innerHTML=`vocẽ sabia que nomundo tem ${dados.total_de_pessoas_mundo} de pessoas que se aproximamde ${dados.total_de_pessoas_connectadas} estao conectadasem alguma rede social e passam em media ${dados.tempo_medio} horas conectadas.`
console.log(paragrafo)        
const container=document.getElementById('graficos-container')
container.appendChild(paragrafo)
}
vizualizadorInformacoesGlobais()
