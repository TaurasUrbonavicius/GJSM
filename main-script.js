function followingMouse1() {
    const title = document.querySelector('.header > h1');
    const MAX = 4;             // maximum px offset in any direction

    document.addEventListener('mousemove', e => {
    const rect = title.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;   // centre of the <h1>
    const cy = rect.top  + rect.height / 2;

    // distance from mouse to centre, normalised to −1 … 1
    let dx = (e.clientX - cx) / (rect.width  / 2);
    let dy = (e.clientY - cy) / (rect.height / 2);

    // clamp and scale to pixels
    dx = Math.max(-1, Math.min(1, dx)) * MAX;
    dy = Math.max(-1, Math.min(1, dy)) * MAX;

    // feed the numbers back into CSS variables
    title.style.setProperty('--sx', dx.toFixed(1));
    title.style.setProperty('--sy', dy.toFixed(1));
    });
}
followingMouse1()

// function followingMouse2() {
//     const title = document.querySelector('.card-header > h1');
//     const MAX = 3;             // maximum px offset in any direction

//     document.addEventListener('mousemove', e => {
//     const rect = title.getBoundingClientRect();
//     const cx = rect.left + rect.width  / 2;   // centre of the <h1>
//     const cy = rect.top  + rect.height / 2;

//     // distance from mouse to centre, normalised to −1 … 1
//     let dx = (e.clientX - cx) / (rect.width  / 2);
//     let dy = (e.clientY - cy) / (rect.height / 2);

//     // clamp and scale to pixels
//     dx = Math.max(-1, Math.min(1, dx)) * MAX;
//     dy = Math.max(-1, Math.min(1, dy)) * MAX;

//     // feed the numbers back into CSS variables
//     title.style.setProperty('--sx', dx.toFixed(1));
//     title.style.setProperty('--sy', dy.toFixed(1));
//     });
// }
// // followingMouse2()