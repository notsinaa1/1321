document.addEventListener('DOMContentLoaded', () => {
    const messageArea = document.getElementById('message-area');
    const resultArea = document.getElementById('result-area');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const container = document.querySelector('.container');
    const body = document.body;

    yesBtn.addEventListener('click', () => {
        messageArea.classList.add('hidden'); // Mesaj ve butonları gizle
        
        // "Teşekkürler!" mesajını oluşturalım
        const thankYouMessage = document.createElement('p');
        thankYouMessage.id = 'result-text'; // ID veriyoruz ki JS ile kontrol edebilelim
        thankYouMessage.className = 'result-message success';
        thankYouMessage.textContent = 'Teşekkürler!';
        resultArea.appendChild(thankYouMessage); // Sonuç alanına ekle
        
        resultArea.classList.remove('hidden'); // Sonuç alanını görünür yap
        setTimeout(() => {
            thankYouMessage.classList.add('visible'); // Animasyonu tetikle
        }, 10); // Çok kısa bir gecikme ile görünür yap

        container.style.backgroundColor = 'rgba(230, 255, 230, 0.9)'; // Kutu rengini değiştir
        body.style.background = 'linear-gradient(135deg, #e6ffe6, #d0ffd0)'; // Arka planı yeşile yakın yap
    });

    noBtn.addEventListener('click', () => {
        messageArea.classList.add('hidden'); // Mesaj ve butonları gizle
        
        // "Peki..." mesajını oluşturalım
        const okayMessage = document.createElement('p');
        okayMessage.id = 'result-text'; // ID veriyoruz
        okayMessage.className = 'result-message fail';
        okayMessage.textContent = 'Peki...';
        resultArea.appendChild(okayMessage); // Sonuç alanına ekle

        resultArea.classList.remove('hidden'); // Sonuç alanını görünür yap
        setTimeout(() => {
            okayMessage.classList.add('visible'); // Animasyonu tetikle
        }, 10);

        // Arka plan ve kutu rengini kırmızıya yakın yap
        container.style.backgroundColor = 'rgba(255, 230, 230, 0.9)';
        body.style.background = 'linear-gradient(135deg, #ffe6e6, #ffd0d0)';

        // "Peki..." yazısını yavaş yavaş büyüterek tüm ekranı kaplatma
        let fontSize = 2.2; // Başlangıç font boyutu (em) - CSS'teki initial boyutuyla uyumlu
        const finalFontSize = Math.max(window.innerWidth, window.innerHeight) / 30; // Ekran boyutuna göre nihai büyüklük

        const growInterval = setInterval(() => {
            fontSize += 0.5; // Büyüme hızı
            okayMessage.style.fontSize = `${fontSize}em`;

            if (fontSize * 16 > window.innerHeight * 0.8 || fontSize * 16 > window.innerWidth * 0.8) { // Yazı ekranın büyük kısmını kapladığında
                clearInterval(growInterval); // Büyümeyi durdur

                okayMessage.textContent = "EVET!"; // Yazıyı "EVET!" olarak değiştir
                okayMessage.style.position = 'fixed'; // Ekranı kaplaması için sabit konum
                okayMessage.style.top = '0';
                okayMessage.style.left = '0';
                okayMessage.style.width = '100%';
                okayMessage.style.height = '100%';
                okayMessage.style.backgroundColor = '#d9534f'; // Kırmızı arka plan
                okayMessage.style.display = 'flex'; // Ortalamak için
                okayMessage.style.alignItems = 'center';
                okayMessage.style.justifyContent = 'center';
                okayMessage.style.zIndex = '9999'; // En üste çıkar
                okayMessage.style.fontSize = `${finalFontSize}px`; // Son boyutu ayarla
                okayMessage.style.borderRadius = '0'; // Köşeleri kaldır
                okayMessage.style.boxShadow = 'none'; // Gölgeyi kaldır
            }
        }, 50); // Her 50 milisaniyede bir büyüt (daha akıcı)
    });
});
