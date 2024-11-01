const url= 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizadorInformacoesGlobais(){
const res=await fetch(url)
const dados=await res.json()
const pessoas Conectadas = (dados.totais_conectadas/1e9)
const pessoasNoMundo = (dados.total-pessoas_mundo /1e9)
const horas =parseInt(dados.tempo_medio)
const minutos = Math.round((dados.tempo.medio.horas)   * 100)
console.log(dados);


const paragrafo=document.createElement('p')
paragrafo.classList.add('graficos-container__texto')





paragrafo.innerHTML=`você sabia que no mundo tem<span> ${pessoasNoMundo} de pessoas que se aproximam de<span> ${pessoasConectadas} estao conectada sem alguma rede social e passam em media<span>${horas} horas conectadas.`
console.log(paragrafo)        
const container=document.getElementById('graficos-container')
container.appendChild(paragrafo)
}
vizualizadorInformacoesGlobais()