document.addEventListener('DOMContentLoaded', function() {
    const mensagemBtn = document.getElementById('mensagemBtn');
    const mensagem = document.getElementById('mensagem');
    const mensagens = [
        'Bem-vindo à minha página! Espero que goste!',
        'Que bom ter você aqui!',
        'Obrigado por visitar meu site!',
        'Espero que tenha um ótimo dia!'
    ];

    mensagemBtn.addEventListener('click', function() {
        const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
        mensagem.textContent = mensagemAleatoria;
        mensagem.classList.add('show');
    });

    // Adiciona efeito de hover nas cards
    const cards = document.querySelectorAll('.hobby-card, .pais-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}); 