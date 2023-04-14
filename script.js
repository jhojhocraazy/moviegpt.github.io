const form = document.querySelector(".form");
const output = document.getElementById("output");
const btnRecommend = document.getElementById("btn-recommend");

const openai = new OpenAI(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);

const generatePrompt = (movies) => {
  const prompt = `Quero uma recomendação de filme baseado nos últimos 5 filmes que assisti. São eles: ${movies.join(
    ", "
  )}.`;
  return prompt;
};

const getRecommendation = async () => {
  const lastMoviesInput = document.getElementById("last-movies");
  const lastMovies = lastMoviesInput.value.trim().split(", ");

  if (lastMovies.length !== 5) {
    alert("Por favor, informe os últimos 5 filmes que você assistiu.");
    return;
  }

  const prompt = generatePrompt(lastMovies);

  const completions = await openai.complete({
    engine: "text-davinci-002",
    prompt: prompt,
    maxTokens: 60,
    n: 1,
    stop: ["Q:", "A:"],
  });

  const recommendation = completions.choices[0].text.trim();
  output.innerHTML = `Recomendação: ${recommendation} <br/>`;

  const confirmSeen = confirm(`Você já assistiu "${recommendation}"?`);

  if (confirmSeen) {
    const confirmNew = confirm("Deseja outra recomendação?");
    if (confirmNew) {
      getRecommendation();
    } else {
      output.innerHTML += "Espero que goste do filme! 🍿";
    }
  } else {
    output.innerHTML += "Espero que goste do filme! 🍿";
  }
};

btnRecommend.addEventListener("click", getRecommendation);
