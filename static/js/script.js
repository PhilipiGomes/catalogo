// botao de voltar ao topo

document.addEventListener("scroll", function () {
  const btn = document.getElementById("btntopo");

  // mostrar ou esconder o botão de rolagem de página
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  // rolar a pagina ate o topo, ao clicar no botao
  btn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

function abrirModal(id) {
  document.getElementById(id).style.display = "block";
}

function fecharModal(id) {
  document.getElementById(id).style.display = "none";
}

window.addEventListener("click", function (event) {
  const login = document.getElementById("loginModal");
  const cadastro = document.getElementById("cadastroModal");
  if (event.target === login) login.style.display = "none";
  if (event.target === cadastro) cadastro.style.display = "none";
});
