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
        // Düzeltme: Burada "Peki..." yazan elementi seçmek için id kullanmalıyız.
        // Eğer doğrudan evetYazisi id'sine sahip bir P elementi yoksa hata verebilir.
        resultArea.innerHTML = '<p id="result-text" class="result-message fail visible">Peki...</p>'; // id="result-text" ekledim

        const evetYazisi = document.getElementById('result-text'); // id'yi güncelledim
        let fontSize = 2; // Başlangıç font boyutu (em)

        const buyumeArac = setInterval(() => { // Türkçe karakteri düzeltildi
            fontSize += 0.2;
            evetYazisi.style.fontSize = `${fontSize}em`;

            if (fontSize > 20) {
                evetYazisi.textContent = "EVET!";
                evetYazisi.style.position = 'fixed';
                evetYazisi.style.top = '0';
                evetYazisi.style.left = '0';
                evetYazisi.style.width = '100%';
                evetYazisi.style.height = '100%';
                evetYazisi.style.backgroundColor = '#d9534f';
                evetYazisi.style.display = 'flex';
                evetYazisi.style.alignItems = 'center';
                evetYazisi.style.justifyContent = 'center';
                evetYazisi.style.zIndex = '9999';
                clearInterval(buyumeArac); // Türkçe karakteri düzeltildi
            }
        }, 100);
    });
});
