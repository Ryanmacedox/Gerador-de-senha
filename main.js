const numeroSenha = document.queryselector('.parametro-senha_texto');
let tamanhoSenha = 12;
numeroSenha. textcontent = tamanhosenha;

const botoes = document.querySelectorAll('.parametro-senha_botao');

botoes[o].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
if (tamanhoSenha > 1){
tamanhoSenha = tamanhoSenha-1;
tamanhoSenha--;
}
numeroSenha.textContent = tamanhoSenha;
}
function aumentaTamanho(){
if(tamanhoSenha < 20)E
tamanhoSenha = tamanhoSenha+1;
}
numeroSenha.textContent = tamanhosenha;
}
