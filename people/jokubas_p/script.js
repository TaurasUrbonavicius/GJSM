let CloseReadMore = document.getElementById("CloseReadMore");
let ReadMore = document.getElementById("ReadMore");
let ReadMoreTitle = document.getElementById("ReadMoreTitle");
let ReadMoreDescription = document.getElementById("ReadMoreDescription");
let carousel = document.getElementById("carousel");

let Information = {
    "Programming": {
        title: "Programming",
        description: "I decided to make a Roblox game during the summer so I have something to do. But to make a game I had to learn a new programming language (Luau). So I started by doing simple scripting then moved on to more complicated tasks such as gun systems, inventories etc.",
        images: {
            "image1": "Images/scripting2.png",
            "image2": "Images/scripting3.png",
            "image3": "Images/scripting.png"
        }
    },
    "Driving license": {
        title: "Driving license",
        description: "On July 17th I had my first driving lesson. It was an exciting experience, and I'm looking forward to getting my license. I can't wait to drive on my own! So far I've passed the theory test and working on practice.",
        images: {
            "image1": "Images/driving.jpeg",
            "image2": "Images/driving2.jpg"
        }
    },
    "Birthday": {
        title: "Birthday",
        description: "I had my birthday on July 25th, I'm now 18! We spent the entire day out in nature, enjoying the fresh air and sunshine while eating delicious food. Unfortunately I don't have any photos because my phone died.",
        images: {
            "image1": "Images/birthday.jpg",
            "image2": "Images/birthday2.jpg"
        }
    },
    "Osu!Mania": {
        title: "Osu!Mania",
        description: "I've been playing osu!mania quite a lot this summer, my skills improved significantly. I used to play 3.4* maps now I can confidently play 4.7* maps like in the video. I also reached Top #80 in Lithuania and Top #50,000 globally.",
        images: {
            "image1": "Images/osu.jfif"
        },
        videos: {
            "video1": "Images/osuClip.mp4"
        }
    },
    "Stand-up Paddleboarding": {
        title: "Stand-up Paddleboarding",
        description: "Me and my family decided to go stand-up paddleboarding for the first time. It was a great way to connect with nature and stay active. We rented the paddleboards and had a lot of fun on the water.",
        images: {
            "image1": "Images/boat.jfif",
            "image2": "Images/boat2.jfif",
            "image3": "Images/boat3.jpg"
        }
    },
    "Walks in the forest": {
        title: "Walks in the forest",
        description: "I went for walks in the forest with my dog during the summer break, enjoying the silence of nature and the fresh air. It was a great way to relax and recharge.",
        images: {
            "image1": "Images/forrest2.jfif",
            "image2": "Images/forrest1.jpg"
        }
    },
    "Nephew's Birthday": {
        title: "Nephew's Birthday",
        description: "I celebrated my nephew's 2nd birthday on August 10th we had a fun party near a lake, there were a lot of guests and delicious food. There were mostly kids ranging from 1 to 5 years old.",
        images: {
            "image1": "Images/lake.jpg",
            "image2": "Images/lake2.jpg",
            "image3": "Images/lake3.jpg"
        }
    },
    "War thunder": {
        title: "War thunder",
        description: "I played a lot of War Thunder during the summer break, after an entire year and miserable 800 hours I managed to reach top tier in both air and ground forces in Sweden.",
        images: {
            "image1": "Images/war_thunder1.jpg",
            "image2": "Images/war_thunder2.jpg",
            "image3": "Images/war_thunder3.png"
        }
    },
    "Anime": {
        title: "Anime",
        description: "I watched a lot of anime during the summer break, explored new genres that I never watched before. I watched 7 new series which are - Bocchi the rock, I want to eat your pancreas, Look back, Girls last tour, To your Eternity and Eighty Six and lastly Dan Da Dan. My favorite one was Eighty Six.",
        images: {
            "image1": "Images/anime1.png",
            "image2": "Images/anime2.jpg"
        }
    },
    "Elden Ring": {
        title: "Elden Ring",
        description: "My friend got me Elden ring as a birthday gift, and both of us have been playing it together. After a couple of weeks we've finally beat the game. So far I've beaten the game 3 times.",
        images: {
            "image1": "Images/elden_ring1.png",
            "image2": "Images/elden_ring2.jpg"
        }
    }
};

function pauseAllVideos() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.pause();
    });
}

//Close read more
CloseReadMore.addEventListener("click", function () {
    ReadMore.style.display = "none";
    pauseAllVideos();
});

ReadMore.addEventListener("click", function (e) {
    if (e.target === ReadMore) {
        ReadMore.style.display = "none";
        pauseAllVideos();
    }
});

// Open read more
document.querySelectorAll("#OpenReadMore").forEach(button => { // Shoutout to chat gpt for fixing the damn carousel
    button.addEventListener("click", function () {
        ReadMore.style.display = "block";
        ReadMore.classList.add("fade-in")
        ReadMoreTitle.innerHTML = Information[this.name].title;
        ReadMoreDescription.innerHTML = Information[this.name].description;

        const info = Information[this.name];
        const carouselWrapper = document.getElementById('carousel-wrapper');
        if (!carouselWrapper) return;

        while (carouselWrapper.firstChild) {
            carouselWrapper.removeChild(carouselWrapper.firstChild);
        }

        let media = [];
        if (info.images) {
            for (const key in info.images) {
                media.push({ type: 'image', src: info.images[key] });
            }
        }
        if (info.videos) {
            for (const key in info.videos) {
                media.push({ type: 'video', src: info.videos[key] });
            }
        }

        if (media.length === 0) {
            media.push({ type: 'image', src: 'Images/cat.jpg' });
        }

        media.forEach((item, idx) => {
            const itemDiv = document.createElement('div');

            if (idx === 0) {
                itemDiv.className = 'duration-700 ease-in-out';
                itemDiv.setAttribute('data-carousel-item', 'active');
            } else {
                itemDiv.className = 'hidden duration-700 ease-in-out';
                itemDiv.setAttribute('data-carousel-item', '');
            }

            if (item.type === 'image') {
                const img = document.createElement('img');
                img.src = item.src;
                img.className = 'absolute block h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2';
                img.alt = '...';
                itemDiv.appendChild(img);
            } else if (item.type === 'video') {
                const video = document.createElement('video');
                video.src = item.src;
                video.className = 'absolute block h-full w-full';
                video.controls = true;
                itemDiv.appendChild(video);
            }
            carouselWrapper.appendChild(itemDiv);
        });

        const carouselElement = document.getElementById('controls-carousel');
        if (carouselElement) {
            const items = Array.from(carouselWrapper.querySelectorAll('[data-carousel-item]'));
            let current = 0;

            items.forEach((item, idx) => {
                if (idx === 0) {
                    item.classList.remove('hidden');
                    item.setAttribute('data-carousel-item', 'active');
                } else {
                    item.classList.add('hidden');
                    item.setAttribute('data-carousel-item', '');
                }
            });

            const prevBtn = carouselElement.querySelector('[data-carousel-prev]');
            const nextBtn = carouselElement.querySelector('[data-carousel-next]');
            if (prevBtn) {
                const newPrev = prevBtn.cloneNode(true);
                prevBtn.parentNode.replaceChild(newPrev, prevBtn);
            }
            if (nextBtn) {
                const newNext = nextBtn.cloneNode(true);
                nextBtn.parentNode.replaceChild(newNext, nextBtn);
            }

            const prev = carouselElement.querySelector('[data-carousel-prev]');
            const next = carouselElement.querySelector('[data-carousel-next]');

            function fadeTo(newIdx) {
                const prevItem = items[current];
                const nextItem = items[newIdx];
                if (prevItem === nextItem) return;
                prevItem.style.transition = 'opacity 0.5s';
                nextItem.style.transition = 'opacity 0.5s';
                prevItem.style.opacity = 1;
                nextItem.style.opacity = 0;
                nextItem.classList.remove('hidden');
                nextItem.setAttribute('data-carousel-item', 'active');
                setTimeout(() => {
                    prevItem.style.opacity = 0;
                    nextItem.style.opacity = 1;
                }, 10);
                setTimeout(() => {
                    prevItem.classList.add('hidden');
                    prevItem.setAttribute('data-carousel-item', '');
                    prevItem.style.opacity = '';
                    nextItem.style.opacity = '';
                    prevItem.style.transition = '';
                    nextItem.style.transition = '';
                    current = newIdx;
                }, 510);
            }
            if (prev) {
                prev.addEventListener('click', () => {
                    const newIdx = (current - 1 + items.length) % items.length;
                    fadeTo(newIdx);
                    pauseAllVideos();
                });
            }
            if (next) {
                next.addEventListener('click', () => {
                    const newIdx = (current + 1) % items.length;
                    fadeTo(newIdx);
                    pauseAllVideos();
                });
            }
        }
    });
});

// Update navigation links based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.top-button');

function updateNavLinks() {
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 50) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', () => {
    let current = '';
    updateNavLinks(current);
});
updateNavLinks();


// Improves the spacing when user zooms out
const blablabla = document.getElementsByClassName("bottom-gap-30");
const blablabla2 = document.getElementsByClassName("title");

function adjustMargins(zoom) {
    const baseMarginRem = 45;
    const newMarginRem = baseMarginRem * zoom;

    const baseMarginRem2 = 40;
    const newMarginRem2 = baseMarginRem2 * zoom;

    Array.from(blablabla).forEach(i => {
        i.style.marginBottom = `${newMarginRem}vh`;
    });
    Array.from(blablabla2).forEach(i => {
        i.style.marginTop = `${newMarginRem2}vh`;
    });
}

let lastZoom = window.devicePixelRatio || 1;
adjustMargins(lastZoom);

window.addEventListener('resize', () => {
    const zoom = window.devicePixelRatio || 1;
    if (zoom !== lastZoom) {
        lastZoom = zoom;
        adjustMargins(zoom);
    }
});

Array.from(document.getElementsByClassName("spin")).forEach(el => {
    el.addEventListener("click", function () {
        window.location.href = "cat.html";
    });
});