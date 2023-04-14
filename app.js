const OPENAI_API_KEY = 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;
const openai = new OpenAI(OPENAI_API_KEY);

function recomendarFilme() {
    const ultimosFilmes = document.getElementById('ultimos_filmes').value;
    const genero = document.getElementById('genero').value;
    const diretor = document.getElementById('diretor').value;
    const atores = document.getElementById('atores').value;
    const resultadoDiv = document.getElementById('resultado');

    const prompt = `Recomende um filme baseado nos meus últimos 5 filmes assistidos: ${ultimosFilmes}. Gênero: ${genero}. Diretor: ${diretor}. Atores: ${atores}`;

    openai.complete({
        engine: 'text-davinci-002',
        prompt,
        maxTokens: 60,
        n: 1,
        stop: ['\n'],
        temperature: 0.5,
    })
    .then((response) => {
        const filmeRecomendado = response.data.choices[0].text.trim();
        const filmeAssistido = confirm(`Recomendo o filme "${filmeRecomendado}". Já assistiu esse filme?`);
        if (filmeAssistido) {
            resultadoDiv.innerHTML = 'Ok, vou tentar encontrar outro filme para você.';
            setTimeout(recomendarFilme, 2000);
        } else {
            resultadoDiv.innerHTML = 'Bom filme!';
        }
    })
    .catch((error) => {
        resultadoDiv.innerHTML = `Ocorreu um erro ao processar a sua solicitação: ${error.message}`;
    });
}
