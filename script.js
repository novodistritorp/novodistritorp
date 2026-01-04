const botoes = document.querySelectorAll(".cat-btn");

botoes.forEach(btn => {
    btn.addEventListener("click", () => {
        const conteudo = btn.nextElementSibling;

        document.querySelectorAll(".conteudo").forEach(c => {
            if (c !== conteudo) c.style.display = "none";
        });

        conteudo.style.display = conteudo.style.display === "block" ? "none" : "block";
    });
});
