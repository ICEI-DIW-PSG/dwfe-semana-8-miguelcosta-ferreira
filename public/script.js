// =====================================================
// CATÁLOGO DE FILMES E SÉRIES - JSON
// =====================================================


// =====================================================
// B.1 - DEFINIÇÃO DOS DADOS (JSON)
// =====================================================

const catalogo = [

    {
        id: 1,
        titulo: "Interestelar",
        tipo: "filme",
        ano: 2014,
        generos: ["ficção científica", "drama"],
        nota: 9.5,
        assistido: true
    },

    {
        id: 2,
        titulo: "Breaking Bad",
        tipo: "serie",
        ano: 2008,
        generos: ["drama", "crime"],
        nota: 9.8,
        assistido: true
    },

    {
        id: 3,
        titulo: "The Batman",
        tipo: "filme",
        ano: 2022,
        generos: ["ação"],
        nota: 8.7,
        assistido: false
    },

    {
        id: 4,
        titulo: "Stranger Things",
        tipo: "serie",
        ano: 2016,
        generos: ["ficção", "terror"],
        nota: 8.9,
        assistido: true
    },

    {
        id: 5,
        titulo: "Avatar",
        tipo: "filme",
        ano: 2009,
        generos: ["aventura", "ação"],
        nota: 8.2,
        assistido: false
    },

    {
        id: 6,
        titulo: "Dark",
        tipo: "serie",
        ano: 2017,
        generos: ["mistério", "ficção"],
        nota: 9.1,
        assistido: false
    }

];


// =====================================================
// B.2 - ACESSO E LEITURA DOS DADOS
// =====================================================

// Mostrar estrutura completa
console.log("===== CATÁLOGO COMPLETO =====");
console.log(catalogo);


// Título do primeiro item
console.log("Primeiro título:");
console.log(catalogo[0].titulo);


// Ano do último item
console.log("Ano do último item:");
console.log(catalogo[catalogo.length - 1].ano);


// Segundo gênero do terceiro item
console.log("Segundo gênero do terceiro item:");

if (catalogo[2].generos[1]) {

    console.log(catalogo[2].generos[1]);

} else {

    console.log("O terceiro item possui apenas um gênero.");

}


// =====================================================
// LISTAGEM DE TÍTULOS
// =====================================================

console.log("===== LISTAGEM DE TÍTULOS =====");

for (let item of catalogo) {

    console.log(item.titulo);

}


// =====================================================
// CÁLCULO DAS MÉDIAS
// =====================================================

let somaNotas = 0;

for (let item of catalogo) {

    somaNotas += item.nota;

}

let mediaNotas = somaNotas / catalogo.length;

console.log("===== MÉDIA DAS NOTAS =====");
console.log(mediaNotas.toFixed(2));


// =====================================================
// CHECAGENS COM SOME E EVERY
// =====================================================

// Verificar se existe item não assistido
let existeNaoAssistido = catalogo.some(item => item.assistido === false);

// Verificar se todos possuem nota maior ou igual a 8
let todosBoaNota = catalogo.every(item => item.nota >= 8);

console.log("===== CHECAGENS =====");
console.log("Existe item não assistido?");
console.log(existeNaoAssistido);

console.log("Todos possuem nota maior ou igual a 8?");
console.log(todosBoaNota);


// =====================================================
// RESUMO PARA A DIV#OUTPUT
// =====================================================

// Quantidade de filmes
let quantidadeFilmes = catalogo.filter(item => item.tipo === "filme").length;

// Quantidade de séries
let quantidadeSeries = catalogo.filter(item => item.tipo === "serie").length;

// Quantidade de não assistidos
let naoAssistidos = catalogo.filter(item => item.assistido === false).length;


// =====================================================
// RANKING DAS MAIORES NOTAS
// =====================================================

let ranking = [...catalogo];

ranking.sort((a, b) => b.nota - a.nota);

let top3 = ranking.slice(0, 3);


// =====================================================
// SAÍDA NO HTML
// =====================================================

const output = document.getElementById("output");

output.innerHTML = `

    <p><strong>Total de itens:</strong> ${catalogo.length}</p>

    <p><strong>Quantidade de filmes:</strong> ${quantidadeFilmes}</p>

    <p><strong>Quantidade de séries:</strong> ${quantidadeSeries}</p>

    <p><strong>Quantidade de não assistidos:</strong> ${naoAssistidos}</p>

    <p><strong>Média geral das notas:</strong> ${mediaNotas.toFixed(2)}</p>

    <h4 class="mt-4">🏆 Top 3 Maiores Notas</h4>

    <ol>
        <li>${top3[0].titulo} - Nota ${top3[0].nota}</li>
        <li>${top3[1].titulo} - Nota ${top3[1].nota}</li>
        <li>${top3[2].titulo} - Nota ${top3[2].nota}</li>
    </ol>

`;