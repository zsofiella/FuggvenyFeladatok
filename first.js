(function clickBtnHandler() {
    const buttons = document.querySelectorAll('.button');
    for (let i = 0; i < buttons.length; i += 1) {
        buttons[i].addEventListener('click', (event) => {
            console.log('button.name', i);
        })
    }
})();

// amely kattintásra kiírja a gomb szövegét a konzolra