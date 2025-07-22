document.addEventListener('DOMContentLoaded', () => {
    const messageArea = document.getElementById('message-area'); // Ana mesaj ve butonların olduğu alan
    const yesBtn = document.getElementById('yes-btn'); // EVET butonu
    const noBtn = document.getElementById('no-btn');   // HAYIR butonu
    const container = document.querySelector('.container'); // Ana içerik kutusu
    const body = document.body; // Sayfanın gövdesi

    // EVET butonuna tıklandığında
    yesBtn.addEventListener('click', () => {
        messageArea.classList.add('hidden'); // Mesaj ve butonları gizle
        container.classList.add('hidden'); // Ana kutuyu gizle

        // "Teşekkürler!" mesajını oluştur ve ekrana getir
        const thankYouMessage = document.createElement('p');
        thankYouMessage.id = 'thank-you-text';
        thankYouMessage.className = 'result-message success full-screen-overlay'; // Tam ekran ve başarılı stil
        thankYouMessage.textContent = 'Teşekkürler!';
        body.appendChild(thankYouMessage); // Doğrudan body'ye ekle

        // Animasyonu başlat
        setTimeout(() => {
            thankYouMessage.classList.add('visible');
            thankYouMessage.style.transform = 'translateY(0)';
        }, 10);

        // Arka planı yeşil tonlarına çevir
        body.style.background = 'linear-gradient(135deg, #e6ffe6, #d0ffd0)';
    });

    // HAYIR butonuna tıklandığında
    noBtn.addEventListener('click', () => {
        // Mevcut içeriği gizle
        messageArea.classList.add('hidden'); // Mesaj ve orijinal butonları gizle
        container.classList.add('hidden'); // Ana kutuyu gizle

        // Yeni, büyüyen EVET efekti için bir element oluştur
        const growingEvetEffect = document.createElement('p'); // p etiketi kullanıyoruz
        growingEvetEffect.id = 'growing-yes-effect';
        growingEvetEffect.className = 'result-message fail'; // Başlangıçta Hayır rengi ama text EVET olacak
        growingEvetEffect.textContent = 'EVET!'; // Metni EVET olarak ayarla

        // İlk konumlandırma ve stil ayarları
        growingEvetEffect.style.position = 'fixed';
        growingEvetEffect.style.top = '50%';
        growingEvetEffect.style.left = '50%';
        growingEvetEffect.style.transform = 'translate(-50%, -50%) scale(1)'; // Merkezden başla, küçük boyut
        growingEvetEffect.style.zIndex = '9999'; // En üstte olsun
        growingEvetEffect.style.transition = 'none'; // Geçiş efekti başlangıçta olmasın
        growingEvetEffect.style.opacity = '1'; // Görünür olsun
        growingEvetEffect.style.fontSize = '2em'; // Başlangıç font boyutu
        growingEvetEffect.style.padding = '15px 35px'; // Buton gibi görünmesi için padding ekle
        growingEvetEffect.style.borderRadius = '30px'; // Buton gibi yuvarlak köşeler
        growingEvetEffect.style.backgroundColor = '#6c7b95'; // EVET butonunun orijinal rengi (mavi-gri)
        growingEvetEffect.style.color = 'white'; // Yazı rengi beyaz

        body.appendChild(growingEvetEffect); // Body'ye ekle

        // Tarayıcının stil güncellemelerini işlemesi için küçük bir bekleme
        void growingEvetEffect.offsetWidth;

        // Büyüme animasyonunu başlat
        let scale = 1;
        const growInterval = setInterval(() => {
            scale += 0.05; // Büyüme hızı (daha hızlı veya yavaş ayarlayabilirsin)
            growingEvetEffect.style.transform = `translate(-50%, -50%) scale(${scale})`;

            // Belirli bir boyuta geldiğinde tüm ekranı kaplasın
            // Bu kısım, yazının ekranı kaplamaya başladığı eşik
            if (scale > 15) { // Bu değeri ekran çözünürlüğüne göre ayarlayabilirsin
                clearInterval(growInterval); // Büyümeyi durdur

                // Son hali: Tüm ekranı kapla ve stile son dokunuşlar
                growingEvetEffect.style.top = '0';
                growingEvetEffect.style.left = '0';
                growingEvetEffect.style.width = '100%';
                growingEvetEffect.style.height = '100%';
                growingEvetEffect.style.borderRadius = '0'; // Yuvarlak köşeleri kaldır
                growingEvetEffect.style.boxShadow = 'none'; // Gölgeyi kaldır
                growingEvetEffect.style.backgroundColor = '#5cb85c'; // Başarı rengi (yeşil)
                growingEvetEffect.style.color = 'white'; // Yazı rengi beyaz
                growingEvetEffect.style.fontSize = '20vw'; // Çok büyük, responsive font boyutu
                growingEvetEffect.style.display = 'flex';
                growingEvetEffect.style.alignItems = 'center';
                growingEvetEffect.style.justifyContent = 'center';
                growingEvetEffect.style.transform = 'none'; // Transform'u kaldırarak tam ortalanmasını sağla
            }
        }, 30); // Animasyon akıcılığı (daha düşük sayı daha akıcı)

        // Arka plan rengini başlangıçta "Hayır" rengi yap
        body.style.background = 'linear-gradient(135deg, #ffe6e6, #ffd0d0)';
    });
});
