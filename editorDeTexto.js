
const editor =
    document.getElementById("editor");

const fundoModal =
    document.getElementById("fundoModal");

const fotoArquivo =
    document.getElementById("fotoArquivo");

const fotoPerfil =
    document.getElementById("fotoPerfil");

function executar(comando, valor = null) {

    editor.focus();

    document.execCommand(
        comando,
        false,
        valor
    );

    atualizarInformacoes();
}

function atualizarInformacoes() {

    const texto =
        editor.innerText || "";

    const limpo =
        texto.trim();

    document.getElementById(
        "palavras"
    ).textContent =
        limpo
            ? limpo.split(/\s+/).length
            : 0;

    document.getElementById(
        "caracteres"
    ).textContent =
        texto.length;

    document.getElementById(
        "linhas"
    ).textContent =
        texto
            ? texto.split("\n").length
            : 0;
}

function abrirModal() {

    fundoModal.classList.add(
        "aberto"
    );
}

function fecharModal() {

    fundoModal.classList.remove(
        "aberto"
    );
}

document.getElementById(
    "negrito"
).onclick =
    () => executar("bold");

document.getElementById(
    "italico"
).onclick =
    () => executar("italic");

document.getElementById(
    "riscado"
).onclick =
    () => executar("strikeThrough");

document.getElementById(
    "tipoTexto"
).onchange =
    event =>
        executar(
            "formatBlock",
            event.target.value
        );

document.getElementById(
    "abrirPostagem"
).onclick =
    abrirModal;

fundoModal.addEventListener(
    "click",
    event => {

        if (
            event.target === fundoModal
        ) {

            fecharModal();

        }

    }
);

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            fecharModal();

        }

    }
);

document.getElementById(
    "postarTexto"
).onclick, fecharModal();


fotoArquivo.addEventListener(
    "change",
    event => {

        const arquivo =
            event.target.files[0];

        if (
            !arquivo ||
            !arquivo.type.startsWith(
                "image/"
            )
        ) {

            return;

        }

        const leitor =
            new FileReader();

        leitor.onload =
            event => {

                fotoPerfil.src =
                    event.target.result;

                localStorage.setItem(
                    "minhaFotoPerfil",
                    event.target.result
                );

            };

        leitor.readAsDataURL(
            arquivo
        );

    }
);

document.getElementById(
    "linkPerfil"
).onclick =
    event =>
        event.preventDefault();

document.getElementById(
    "nomePerfil"
).onclick =
    event =>
        event.preventDefault();

