document.addEventListener('DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')
 
    botaoDeAcessibilidade.addEventListener('click', function (){
     botaoDeAcessibilidade.classList.toggle('rotacao-botao');
     opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
 
     const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
     botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
   
    })
 
     const aumentaFonteBotao = document.getElementById('aumentar-fonte');
     const diminuiFonteBotao = document.getElementById('diminuir-fonte');
     
     const alternaContraste = document.getElementById('alterna-contraste')
 
     let tamanhoAtualFonte = 1;
 
     aumentaFonteBotao.addEventListener('click', function(){
         tamanhoAtualFonte += 0.1;
         document.body.style.fontSize = `${tamanhoAtualFonte}rem`
 
     })
 
     diminuiFonteBotao.addEventListener('click', function(){
         tamanhoAtualFonte -= 0.1;
         document.body.style.fontSize = `${tamanhoAtualFonte}rem`
 
     })
 
     alternaContraste.addEventListener('click', function(){
         document.body.classList.toggle('alto-contraste')
     })
 
 
 })




 const uname = document.querySelector('#uname');
 const pass = document.querySelector('#pass');
 const btnContainer = document.querySelector('.btn-container');
 const btn = document.querySelector('#login-btn');
 const form = document.querySelector('form');
 const msg = document.querySelector('.msg');
 btn.disabled = true;
 
 function shiftButton() {
     showMsg();
     const positions = ['shift-left', 'shift-top', 'shift-right', 'shift-bottom'];
     const currentPosition = positions.find(dir => btn.classList.contains(dir));
     const nextPosition = positions[(positions.indexOf(currentPosition) + 1) % positions.length];
     btn.classList.remove(currentPosition);
     btn.classList.add(nextPosition);
 }
 
 function showMsg() {
     const isEmpty = uname.value === '' || pass.value === '';
     btn.classList.toggle('no-shift', !isEmpty);
 
     if (isEmpty) {
         btn.disabled = true
         msg.style.color = 'rgb(218 49 49)';
         msg.innerText = 'preencha todos os campos antes de proseguir';
     } else {
         msg.innerText = 'Great! Now you can proceed';
         msg.style.color = '#92ff92';
         btn.disabled = false;
         btn.classList.add('no-shift')
     }
 }
 
 btnContainer.addEventListener('mouseover', shiftButton);
 btn.addEventListener('mouseover', shiftButton);
 form.addEventListener('input', showMsg)
 btn.addEventListener('touchstart', shiftButton);







 

 ScrollReveal().reveal('#inicio', { delay: 500 });
 ScrollReveal().reveal('#tropicalia', { delay: 500 });
 ScrollReveal().reveal('#galeria', { delay: 500 });
 ScrollReveal().reveal('#contato', { delay: 500 });