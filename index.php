<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Recomendação de filmes</title>
  </head>
  <body>
    <h1>Recomendação de filmes</h1>
    <form id="movies-form">
      <label for="movies">Quais os últimos 5 filmes que você assistiu?</label><br>
      <input type="text" id="movies" name="movies"><br>
      <input type="submit" value="Enviar">
    </form>
    <div id="recommendation"></div>

    <script src="https://cdn.jsdelivr.net/npm/@openai/api@0.4.5/dist/openai-api.min.js"></script>
    <script src="app.js"></script>
  </body>
</html>
