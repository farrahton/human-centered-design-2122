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




let interviewer = document.querySelectorAll('blockquote.interviewer')
let alvina = document.querySelectorAll('blockquote.alvina')
let interviewerName = document.querySelectorAll('p.interviewer')
let alvinaName = document.querySelectorAll('p.alvina')

function animateInView(element) {
var rect = element.getBoundingClientRect();
  return (
        rect.top < 300
    )
}
document.addEventListener('scroll', function () {
    interviewer.forEach(blockquote => {
    if (animateInView(blockquote)) {
            blockquote.classList.add('showRight')
        }
  })
  interviewerName.forEach(p => {
    if (animateInView(p)) {
            p.classList.add('showRight')
        }
  })
  
  alvina.forEach(blockquote => {
    if (animateInView(blockquote)) {
            blockquote.classList.add('showLeft')
        }
  })
  alvinaName.forEach(p => {
    if (animateInView(p)) {
            p.classList.add('showLeft')
        }
  })
});





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