document.addEventListener('DOMContentLoaded', function progressbar () {
    const progressbarinner = document.querySelector('.progressBarInside')

    window.addEventListener('scroll', function () {
        let h = document.documentElement

        // benoem allebei als fallback om het in meerdere browsers te supporten #BrowserTechnologies
        let sTop = h.scrollTop || document.body.scrollTop
        let sHeight = h.scrollHeight || document.body.scrollHeight

        let percentage = sTop / (sHeight - h.clientHeight) * 100

        progressbarinner.style.width = percentage + '%'
        // console.log(percent)
    })
})









// gsap.registerPlugin(ScrollTrigger);

// const bodyScrollBar = Scrollbar.init(document.body, {
//     damping: 0.1,
//     delegateTo: document,
//     alwaysShowTracks: true,
//     speed: 0.2,
// });
// ScrollTrigger.scrollerProxy("body", {
//     scrollTop(value) {
//         if (arguments.length) {
//             bodyScrollBar.scrollTop = value;
//         }
//         return bodyScrollBar.scrollTop;
//     },
// });
// bodyScrollBar.addListener(ScrollTrigger.update);
// ScrollTrigger.defaults({
//     scroller: document.body,
// });

// gsap.to(".text p", {
//     backgroundPositionX: "0%",
//     stagger: 1,
//     scrollTrigger: {
//         trigger: ".text p",
//         scrub: 1,
//         // markers: true,
//         start: "top 75%",
//         end: "bottom 25%",

//     },
// });

// gsap.to(".text2 p", {
//     backgroundPositionX: "0%",
//     stagger: 1,
//     scrollTrigger: {
//         trigger: ".text2 p",
//         scrub: 1,
//         // markers: true,
//         start: "top 75%",
//         end: "bottom 95%",

//     },
// });