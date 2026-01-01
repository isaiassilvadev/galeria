var imagens = document.querySelectorAll('article#fotos img');
var modal = document.getElementById('modal');
var imagemModal = modal.querySelector('img');
var posicaorolagem = 0

var botaoSair;

/* GARANTE que o modal começa fechado */
modal.style.display = 'none';

/* abrir modal */
function mostrar(srcImagem) {
  posicaorolagem = window.scrollY

  imagemModal.src = srcImagem;
  modal.style.display = 'flex';

  document.body.style.overflow = 'hidden'
  document.body.style.position = 'fixed'

  criarBotaoSair();
}

/* criar botão X dinamicamente */
function criarBotaoSair() {
  // evita criar mais de um botão
  if (botaoSair) return;

  botaoSair = document.createElement('button');
  botaoSair.className = 'x';
  botaoSair.innerHTML = 'X';

  document.body.appendChild(botaoSair);

  botaoSair.onclick = fecharModal;
}

/* fechar modal */
function fecharModal() {
  modal.style.display = 'none';
  imagemModal.src = '';

  document.body.style.overflow = ''
  document.body.style.position = ''

  window.scrollTo(0, posicaorolagem)

  if (botaoSair) {
    botaoSair.remove();
    botaoSair = null;
  }
}

/* evento nas imagens */
for (var i = 0; i < imagens.length; i++) {
  imagens[i].onclick = function () {
    mostrar(this.src);
  }
}

/* clicar no fundo (fora da imagem) fecha o modal */
modal.onclick = function (e) {
  if (e.target === modal) {
    fecharModal();
  }
};