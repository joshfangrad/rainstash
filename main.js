let count = 5;

const countDown = () => {
    const counterElement = document.getElementById('counter');
    if (counterElement) {
        if (count > 0) {
            count--
            counterElement.textContent = count;
        } else {
            location.href = 'https://rainstash.com';
        }
    }
}

setInterval(countDown, 1000);