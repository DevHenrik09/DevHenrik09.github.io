// Seleciona todos os botões de menu
var menuBtns = document.querySelectorAll('.menu-btn');
window.prompt("Felipe e Gay?: ")
// Adiciona um evento de clique a cada botão
menuBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        // Obtém o ID do botão
        var targetId = this.getAttribute('href').substr(1);
        // Seleciona o elemento com o ID correspondente
        var target = document.getElementById(targetId);

        // Verifica se o elemento está visível ou oculto e alterna seu estado
        if (target.style.display === 'block') {
            target.style.display = 'none';
        } else {
            target.style.display = 'block';
        }
    });
});