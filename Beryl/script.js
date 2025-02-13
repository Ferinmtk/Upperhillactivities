function jumpButton() {
    const button = document.querySelector('.no-btn');
    const container = document.querySelector('.container');
    const maxX = container.clientWidth - button.offsetWidth;
    const maxY = container.clientHeight - button.offsetHeight;

    button.style.position = 'absolute';
    button.style.top = Math.random() * maxY + 'px';
    button.style.left = Math.random() * maxX + 'px';
}

function showSurprise() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div id="surprise">
            <img id="slideshow" src="Beryl.jpg" alt="Slideshow Image">
            <h2>I knew it!🥰 You can't say No to me.<br> Utaanza aje sasa 🤪.!!!</h2>
        </div>
    `;
    document.getElementById('surprise').style.display = 'block';
    startSlideshow();
}

function startSlideshow() {
    const images = [
        "Beryl.jpg",
        "flowers.jpg"
    ];
    let currentIndex = 0;
    const slideshow = document.getElementById('slideshow');
    slideshow.src = images[currentIndex];

    setTimeout(() => {
        currentIndex = 1;
        slideshow.src = images[currentIndex];
        document.getElementById('body').style.backgroundColor = 'black';
    }, 500);
}
