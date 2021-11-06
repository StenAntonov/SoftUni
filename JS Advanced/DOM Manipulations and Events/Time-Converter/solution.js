function attachEventsListeners() {
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    const daysBtn = document.getElementById('daysBtn').addEventListener('click', () => {
        hours.value = Number(days.value * 24);
        minutes.value = Number(days.value * 1440);
        seconds.value = Number(days.value * 86400);
    });
    const hoursBtn = document.getElementById('hoursBtn').addEventListener('click', () => {
        days.value = Number(hours.value / 24);
        minutes.value = Number(hours.value * 60);
        seconds.value = Number(hours.value * 3600);
    });
    const minutesBtn = document.getElementById('minutesBtn').addEventListener('click', () => {
        days.value = Number(minutes.value / 1440);
        hours.value = Number(minutes.value / 60);
        seconds.value = Number(minutes.value * 60);
    });
    const secondsBtn = document.getElementById('secondsBtn').addEventListener('click', () => {
        days.value = Number(seconds.value / 86400);
        hours.value = Number(seconds.value / 3600);
        minutes.value = Number(seconds.value / 60);
    });
};