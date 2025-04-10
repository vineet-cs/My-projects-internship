document.getElementById('startButton').addEventListener('click', function () {
    const dateTimeInput = document.getElementById('datetime').value;
    const message = document.getElementById('message');

    if (!dateTimeInput) {
        alert("Please select a date and time.");
        return;
    }

    const targetDate = new Date(dateTimeInput);

    const interval = setInterval(() => {
        const now = new Date();
        const diff = targetDate - now;

        if (diff <= 0) {
            clearInterval(interval);
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            message.textContent = "🎉 Time's up!";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        message.textContent = "";
    }, 1000);
});
