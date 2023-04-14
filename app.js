const openai = new OpenAI(apiKey);

const form = document.querySelector('#movies-form');
const recommendationEl = document.querySelector('#recommendation');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const movies = form.elements.movies.value.split(',').map(movie => movie.trim());
  const recommendation = await getMovieRecommendation(movies);
  recommendationEl.innerHTML = `
    <p>Recomendação: ${recommendation}</p>
    <button id="yes-button">Sim</button>
    <button id="no-button">Não</button>
  `;
  const yesButton = document.querySelector('#yes-button');
  const noButton = document.querySelector('#no-button');
  yesButton.addEventListener('click', async () => {
    const newRecommendation = await getMovieRecommendation(movies);
    recommendationEl.innerHTML = `
      <p>Recomendação: ${newRecommendation}</p>
      <button id="yes-button">Sim</button>
      <button id="no-button">Não</button>
    `;
  });
  noButton.addEventListener('click', () => {
    recommendationEl.innerHTML = '<p>Bom filme!</p>';
  });
});

async function getMovieRecommendation(movies) {
  const prompt = `Recomende um filme com base nos seguintes filmes: ${movies.join(', ')}.`;
  const response = await openai.complete({
    engine: 'davinci',
    prompt: prompt,
    maxTokens: 60,
    n: 1,
    temperature: 0.5,
  });
  return response.choices[0].text.trim();
}
