document.addEventListener('DOMContentLoaded', () => {
    const messageArea = document.getElementById('message-area');
    const resultArea = document.getElementById('result-area');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const container = document.querySelector('.container');
    const body = document.body; // body elementini seç

    yesBtn.addEventListener('click', () => {
        messageArea.classList.add('hidden'); // Mesaj ve butonları gizle
        resultArea.classList.remove('hidden'); // Sonuç alanını göster
        
        resultArea.innerHTML = '<p class="result-message success visible">Teşekkürler!</p>';
        
        container.style.backgroundColor = 'rgba(230, 255, 230, 0.9)'; // Kutu rengini değiştir
        body.style.background = 'linear-gradient(135deg, #e6ffe6, #d0ffd0)'; // Arka planı yeşile yakın yap
    });

    noBtn.addEventListener('click', () => {
        messageArea.classList.add('hidden'); // Mesaj ve butonları gizle
        resultArea.classList.remove('hidden'); // Sonuç alanını göster
        
        resultArea.innerHTML = '<p class="result-message fail visible">Peki...</p>';
        
        container.style.backgroundColor = 'rgba(255, 230, 230, 0.9)'; // Kutu rengini değiştir
        body.style.background = 'linear-gradient(135deg, #ffe6e6, #ffd0d0)'; // Arka planı kırmızıya yakın yap
    });
});