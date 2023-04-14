<!DOCTYPE html>
<html>
<head>
    <title>Recomendação de filmes</title>
</head>
<body>
    <h1>Recomendação de filmes</h1>
    <form id="form">
        <label for="ultimos_filmes">Quais os 5 últimos filmes que você assistiu?</label><br>
        <textarea id="ultimos_filmes" name="ultimos_filmes" rows="5" cols="50"></textarea><br>
        <label for="genero">Qual o gênero que você prefere?</label><br>
        <input type="text" id="genero" name="genero"><br>
        <label for="diretor">Qual o diretor que você mais gosta?</label><br>
        <input type="text" id="diretor" name="diretor"><br>
        <label for="atores">Quais os seus atores favoritos?</label><br>
        <input type="text" id="atores" name="atores"><br><br>
        <input type="button" onclick="recomendarFilme()" value="Recomendar">
    </form>
    <div id="resultado"></div>
    <script src="https://cdn.jsdelivr.net/npm/@openai/api@0.5.3/dist/openai-api.min.js"></script>
    <script src="app.js"></script>
</body>
</html>
