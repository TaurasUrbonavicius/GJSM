let aboutMe = document.getElementById('about-me-link');
let aboutMeTab = document.getElementById('about-me-tab');
let siteInfo = document.getElementById('site-info-link');
let siteInfoTab = document.getElementById('site-info-tab');
let eventsTab = document.getElementById('events-tab');
let eventDivs = eventsTab.querySelectorAll('div');
let events = document.getElementById('events-link');
let overlay = document.getElementById('overlay-content');
let overlayBg = document.getElementById('overlay-bg');

function hideAllTabs() {
    aboutMeTab.style.display = "none";
    siteInfoTab.style.display = "none";
    eventsTab.style.display = "none";
}

aboutMe.addEventListener('click', function() {
    hideAllTabs();
    aboutMeTab.style.display = "flex";
});

siteInfo.addEventListener('click', function() {
    hideAllTabs();
    siteInfoTab.style.display = "flex";
});

events.addEventListener('click', function() {
    hideAllTabs();
    eventsTab.style.display = "grid";
});

eventDivs.forEach(function(div) {
    div.addEventListener('click', function() {
        let overlayTitle = overlay.querySelector('h2');
        let overlayImage = overlay.querySelector('img');
        let overlayParagraph = overlay.querySelector('p');
        let closeButton = document.getElementById('overlay-close-button');
        overlayTitle.textContent = div.querySelector('h3').textContent;
        overlayImage.src = div.querySelector('img').src;
        overlayParagraph.textContent = div.querySelector('p').textContent;
        overlay.style.display = "flex";
        overlayBg.style.display = "block";
        closeButton.addEventListener('click', function() {
            overlay.style.display = "none";
            overlayBg.style.display = "none";
        });
    });
});