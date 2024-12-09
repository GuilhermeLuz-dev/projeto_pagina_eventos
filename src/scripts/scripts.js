AOS.init();

const dataEvento = new Date("dec 9, 2024 19:00:00");
const timeStampEvento = dataEvento.getTime();

const DiasMls = (1000 * 60 * 60 * 24);
const HrsMls = (1000 * 60 * 60);
const MinMls = (1000 * 60);

const contaHoras = setInterval(() => {
    const now = new Date();
    const timeStampHoje = now.getTime();
    const timeStampFalta = timeStampEvento - timeStampHoje;
    const diasQueFalta = Math.floor(timeStampFalta / DiasMls);
    const horasQueFalta = Math.floor((timeStampFalta % DiasMls) / HrsMls);
    const MinQueFalta = Math.floor((timeStampFalta % HrsMls) / MinMls);
    const SecQueFalta = Math.floor((timeStampFalta % MinMls) / 1000);

    const contador = document.getElementById("contador");
    contador.innerHTML = `${diasQueFalta} d ${horasQueFalta}h ${MinQueFalta}m ${SecQueFalta}s`;

    if (timeStampFalta < 0) {
        clearInterval(contaHoras);
        const text_time = document.getElementById("text_time");
        text_time.innerHTML = "O evento ja começou!!!";
    }
}, 1000);