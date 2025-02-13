function jumpButton() {
    const button = document.querySelector('.no-btn');
    button.style.position = 'relative';
    button.style.top = Math.random() * 200 + 'px';
    button.style.left = Math.random() * 200 + 'px';
}

function showSurprise() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div id="surprise">
            <img src="flowers.jpg" alt="Bouquet of Black Roses">
            <h2>I knew it 😙 You cant say NO to me 🤪. <br>Utaanza aje sasa!</h2>
        </div>
    `;
    document.getElementById('surprise').style.display = 'block';
}
