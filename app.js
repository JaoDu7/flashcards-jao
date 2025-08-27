const container = document.getElementById("container");

perguntas.forEach((item) => {
  const cartao = document.createElement("article");
  cartao.className = "cartao";

  cartao.innerHTML = `
    <div class="cartao__conteudo">
      <h3>${item.materia}</h3>
      <div class="cartao__conteudo__pergunta">
        <p>${item.pergunta}</p>
      </div>
      <div class="cartao__conteudo__resposta">
        <p>${item.resposta}</p>
      </div>
    </div>
  `;

  cartao.addEventListener("click", () => {
    const resposta = cartao.querySelector(".cartao__conteudo__resposta");
    resposta.style.display =
      resposta.style.display === "block" ? "none" : "block";
  });

  container.appendChild(cartao);
});