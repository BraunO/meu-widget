(function() {
    // Cria o container para o widget
    var container = document.createElement('div');
    container.innerHTML = 'Olá, <span id="widget-text" style="color: blue; cursor: pointer;">jovem</span>!';

    // Adiciona o container ao local onde o widget será embutido
    document.getElementById('meu-widget').appendChild(container);

    // Função para mudar o texto quando o mouse passa por cima
    var textElement = document.getElementById('widget-text');
    textElement.addEventListener('mouseover', function() {
        textElement.textContent = 'velho';
    });

    textElement.addEventListener('mouseout', function() {
        textElement.textContent = 'jovem';
    });
})();