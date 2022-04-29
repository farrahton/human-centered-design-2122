// document.body.onkeyup = function (e) {
//     if (e.key == " " ||
//         e.code == "Space" ||
//         e.keyCode == 32
//     ) {
//         document.querySelector("p")
//     }
// }

gsap.registerPlugin(ScrollTrigger);

const bodyScrollBar = Scrollbar.init(document.body, {
    damping: 0.1,
    delegateTo: document,
    alwaysShowTracks: true,
    speed: 0.2,
});
ScrollTrigger.scrollerProxy("body", {
    scrollTop(value) {
        if (arguments.length) {
            bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
    },
});
bodyScrollBar.addListener(ScrollTrigger.update);
ScrollTrigger.defaults({
    scroller: document.body,
});
gsap.to("p", {
    backgroundPositionX: "0%",
    stagger: 1,
    scrollTrigger: {
        trigger: "p",
        scrub: 1,
        start: "top center",
        end: "bottom top",
    },
});