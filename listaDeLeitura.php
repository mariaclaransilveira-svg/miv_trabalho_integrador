<!DOCTYPE html>
<html lang="em">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Criar Lista</title>
       <link rel="icon" type="image/x-icon" href="icons8-favicon-48.png" />
    <link href="listaDeLeitura.css" rel="stylesheet">
</head>

<body>

 <header class="barraMenu">
        <a href="index.html" class="logo">MIV</a>

        <nav class="menu">
            <button type="button">
                <a style="color: black;" href="pesquisar.html">
                Pesquisar</button></a>
            <button type="button">
                <a style="color: black;" href=" editorDeTexto.html">
                Escrever</a>
            </button>
             <button type="button">
                <a style="color: black;" href="listaDeLeitura.html">
                Listas</a>
            </button>
            <button type=" button">
                <a style="color: black;" href="historico.html"> 
                Histórico</a>
            </button>
        </nav>
    </header>

    <main>
       
        <h1 class="tituloPagina">Criar lista de leitura</h1>

        <p class="subtitulo">
            Crie uma lista para organizar suas histórias favoritas.
        </p>

        <form class="formulario">

            <div class="campo">
                <label for="titulo">Nome da lista</label>

                <input type="text" id="titulo" name="titulo" placeholder="Ex: Minhas histórias favoritas"
                    maxlength="100" required>
            </div>

            <div class="campo">
                <label for="descricao">Descrição</label>

                <textarea id="descricao" name="descricao" placeholder="Escreva uma breve descrição para sua lista..."
                    maxlength="500"></textarea>
            </div>

            <div class="campo">
                <label>Capa da lista</label>

                <input type="image"></input>
                </label>
            </div>

            <div class="acoes">
                <button type="button" class="cancelar">
                    Cancelar
                </button>

                <button type="submit" class="criar">
                    Criar lista
                </button>
            </div>

        </form>

</body>

</html>
</html>
