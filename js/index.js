document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Verifica se um método de contato foi selecionado
    var contactMethodElement = document.querySelector('input[name="contactMethod"]:checked');
    if (!contactMethodElement) {
        alert('Por favor, selecione um método de contato.');
        return;
    }

    // Obtém o valor do método de contato selecionado
    var contactMethod = contactMethodElement.value;

    // Obtém o horário preferido
    var preferredTimeElement = document.querySelector('input[name="preferredTime"]');
    var preferredTime = preferredTimeElement.value;

    // Verifica se o horário preferido foi selecionado
    if (!preferredTime) {
        alert('Por favor, selecione um horário preferido.');
        return;
    }

    // Verifica se o usuário deseja receber atualizações
    var receiveUpdates = document.querySelector('input[name="receiveUpdates"]').checked ? 'Sim' : 'Não';

    // Mostra uma mensagem de confirmação com os dados do formulário
    alert(`Método de contato: ${contactMethod}\nHorário preferido: ${preferredTime}\nReceber atualizações: ${receiveUpdates}`);

    // Aqui você pode adicionar lógica para enviar os dados ao servidor ou outro processamento
});


const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.75); // Calcula a posição do topo da janela mais 75% da altura da janela
    target.forEach(function(element) {
        if(windowTop > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass); // Remove a animação se o elemento não estiver mais visível
        }
    });
}

animeScroll()

if(target.length) {
    window.addEventListener('scroll', function() {
        animeScroll();
    })
   
}

