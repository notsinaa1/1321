document.addEventListener('DOMContentLoaded', () => {
    const messageArea = document.getElementById('message-area');
    const resultArea = document.getElementById('result-area'); // Bu artık kullanılmayabilir ama kalsın
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const container = document.querySelector('.container'); // Ana kutu
    const body = document.body;

    yesBtn.addEventListener('click', () => {
        // Evet butonuna basıldığında
        messageArea.classList.add('hidden'); // Mesaj ve butonları gizle
        container.classList.add('hidden'); // Ana kutuyu da gizle

        // "Teşekkürler!" mesajını oluşturalım ve tüm ekranı kaplasın
        const thankYouMessage = document.createElement('p');
        thankYouMessage.id = 'thank-you-text'; // Yeni ID
        thankYouMessage.className = 'result-message success full-screen-overlay'; // Yeni full-screen sınıfı
        thankYouMessage.textContent = 'Teşekkürler!';
        body.appendChild(thankYouMessage); // Doğrudan body'ye ekle

        // Görünür yap ve animasyonu başlat
        setTimeout(() => {
            thankYouMessage.classList.add('visible');
            thankYouMessage.style.transform = 'translateY(0)'; // Animasyon için
        }, 10);

        // Arka planı başarı renklerine çevir
        body.style.background = 'linear-gradient(135deg, #e6ffe6, #d0ffd0)';
    });

    noBtn.addEventListener('click', () => {
        // Hayır butonuna basıldığında
        messageArea.classList.add('hidden'); // Mesaj ve orijinal butonları gizle
        container.classList.add('hidden'); // Ana kutuyu da gizle

        // Büyüyecek "EVET!" metni için bir element oluştur
        const growingEvet = document.createElement('p');
        growingEvet.id = 'growing-yes-effect'; // Bu efekte özel ID
        growingEvet.className = 'result-message fail'; // Başlangıçta "Hayır" renginde başlasın
        growingEvet.textContent = 'EVET!'; // Direk "EVET!" olarak başlasın

        // İlk konumlandırma ve boyutlandırma
        growingEvet.style.position = 'fixed';
        growingEvet.style.top = '50%';
        growingEvet.style.left = '50%';
        growingEvet.style.transform = 'translate(-50%, -50%) scale(1)'; // Merkezden başla, normal boyut
        growingEvet.style.zIndex = '9999'; // En üstte olsun
        growingEvet.style.transition = 'none'; // Başlangıçta animasyon olmasın
        growingEvet.style.opacity = '1'; // Görünür olsun
        growingEvet.style.fontSize = '2em'; // Başlangıç font boyutu (CSS'teki result-message ile uyumlu)
        growingEvet.style.whiteSpace = 'nowrap'; // Yazının tek satırda kalmasını sağla

        body.appendChild(growingEvet); // Body'ye ekle

        // Tarayıcının stil güncellemelerini işlemesi için küçük bir bekleme
        void growingEvet.offsetWidth;

        // Büyüme animasyonunu başlat
        let scale = 1;
        const growInterval = setInterval(() => {
            scale += 0.05; // Büyüme hızı, istediğin gibi ayarlayabilirsin
            growingEvet.style.transform = `translate(-50%, -50%) scale(${scale})`;

            // Belli bir boyuta geldiğinde veya ekranı kapladığında
            if (scale > 15) { // Bu değeri ekran boyutuna göre test ederek ayarlayabilirsin
                clearInterval(growInterval); // Büyümeyi durdur

                // Son hali: Tüm ekranı kapla ve yeşile dön
                growingEvet.style.top = '0';
                growingEvet.style.left = '0';
                growingEvet.style.width = '100%';
                growingEvet.style.height = '100%';
                growingEvet.style.borderRadius = '0';
                growingEvet.style.boxShadow = 'none';
                growingEvet.style.backgroundColor = '#5cb85c'; // Başarı rengi yeşil
                growingEvet.style.color = 'white'; // Yazı rengini beyaz yap
                growingEvet.style.fontSize = '20vw'; // Ekranı kaplayacak kadar büyük font
                growingEvet.style.display = 'flex';
                growingEvet.style.alignItems = 'center';
                growingEvet.style.justifyContent = 'center';
                growingEvet.style.transform = 'none'; // Transform'u kaldırarak tam ortalanmasını sağla
            }
        }, 30); // Animasyonun akıcılığı (düşük sayı daha akıcı)

        // Arka plan rengini başlangıçta "Hayır" rengi yap
        body.style.background = 'linear-gradient(135deg, #ffe6e6, #ffd0d0)';
    });
});
