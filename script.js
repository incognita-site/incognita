
const prizes = [
  "деф на 3 дня",
  "деф на неделю",
  "деф на месяц",
  "эвакуация ш/з-трц",
  "приватка",
  "2$",
  "нихуя",
  "нихуя"
];

function spin() {
  const result = document.getElementById("result");
  const winner = prizes[Math.floor(Math.random() * prizes.length)];
  result.textContent = winner === "нихуя"
    ? "Вы выиграли: нихуя. В следующий раз повезёт..."
    : `Вы выиграли: ${winner}. Чтобы его получить — напишите сюда: @sevecid`;
}

function share() {
  const shareData = {
    title: "INCOGNITA",
    text: "Приглашаю тебя крутить колесо фортуны от INCOGNITA вместе — заходи сюда: https://incognita.tk",
    url: "https://incognita.tk"
  };

  if (navigator.share) {
    navigator.share(shareData).catch(err => {
      alert("Ошибка при шаринге: " + err);
    });
  } else {
    navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
    alert("Ссылка скопирована. Отправь её друзьям!");
  }
}


// Замени на свой URL
const API_URL = 'https://workspace.igorknaufschtei.replit.app/api';

async function updateStats() {
    try {
        const response = await fetch(`${API_URL}/stats`);
        const data = await response.json();

        if (data.success) {
            document.getElementById('total-users').textContent = data.data.total_users;
            document.getElementById('total-referrals').textContent = data.data.total_referrals;
        }
    } catch (error) {
        console.error('Ошибка загрузки статистики:', error);
    }
}

// Обновляем сразу и каждые 30 секунд
updateStats();
setInterval(updateStats, 30000);
