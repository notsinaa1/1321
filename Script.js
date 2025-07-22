```javascript
document.addEventListener('DOMContentLoaded', () => {
const messageArea = document.getElementById('message-area');
const resultArea = document.getElementById('result-area');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const container = document.querySelector('.container');
const body = document.body;

yesBtn.addEventListener('click', () => {
    messageArea.classList.add('hidden');
    resultArea.classList.remove('hidden');
    resultArea.innerHTML = '<p class="result-message success visible">Teşekkürler!</p>';
    container.style.backgroundColor = 'rgba(230, 255, 230, 0.9)';
    body.style.background = 'linear-gradient(135deg, #e6ffe6, #d0ffd0)';
});

noBtn.addEventListener('click', () => {
    messageArea.classList.add('hidden');
    resultArea.classList.remove('hidden');
    resultArea.innerHTML = '<p id="evet-buyuyor" class="result-message fail visible">Peki...</p>';

    const evetYazisi = document.getElementById('evet-buyuyor');
    let fontSize = 2; // Başlangıç font boyutu (em)

    const buyumeAr కలిగి = setInterval(() => {
        fontSize += 0.2;
        evetYazisi.style.fontSize = `${fontSize}em`;

        // Belli bir boyuta gelince tüm ekranı kapla
        if (fontSize > 20) {
            evetYazisi.textContent = "EVET!";
            evetYazisi.style.position = 'fixed';
            evetYazisi.style.top = '0';
            evetYazisi.style.left = '0';
            evetYazisi.style.width = '100%';
            evetYazisi.style.height = '100%';
            evetYazisi.style.backgroundColor = '#d9534f'; // Kırmızı arka plan
            evetYazisi.style.display = 'flex';
            evetYazisi.style.alignItems = 'center';
            evetYazisi.style.justifyContent = 'center';
            evetYazisi.style.zIndex = '9999'; // En üste çıkar
            clearInterval(buyumeAr కలిగి); // Büyümeyi durdur
        }
    }, 100); // Her 100 milisaniyede bir büyüt
});
});
```

