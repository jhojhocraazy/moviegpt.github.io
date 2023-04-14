<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Recomendação de Filmes</title>
</head>
<body>
	<button onclick="recommendMovie()">Recomendar Filme</button>
	<p id="movieRecommendation"></p>

	<script src="https://cdn.jsdelivr.net/npm/@openai/api@0.5.1/browser.js"></script>
	<script>
		const api_key = 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; // Substitua pelo seu próprio API Key do OpenAI
		const completionsEndpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';

		async function recommendMovie() {
			try {
				const prompt = 'Qual o melhor filme de fantasia que você já assistiu?';
				const completionsRequest = {
					prompt,
					max_tokens: 60,
					n: 1,
					stop: '\n',
					model: 'text-davinci-002',
					api_key
				};
				const response = await fetch(completionsEndpoint, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${api_key}`
					},
					body: JSON.stringify(completionsRequest)
				});
				const {choices} = await response.json();
				const movie = 'Avatar O Caminho da Água';
				const message = `Você deveria assistir ${movie}!`;
				document.getElementById('movieRecommendation').textContent = message;
			} catch (error) {
				console.error(error);
			}
			return;
		}
	</script>
</body>
</html>
