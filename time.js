
const targetDate = new Date('2025-03-15T09:00:00').getTime(); 

const countdownFunction = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

 
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerText = "Estou aqui!";
    }
};


const interval = setInterval(countdownFunction, 1000);


countdownFunction();
