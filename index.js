

const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

document.addEventListener('mousemove', function(e) {
    const circle = document.getElementById('minicircle');
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
});

function firstPageAnim(){
    let tl = gsap.timeline();
    tl.from("#nav",{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
    })
    .to(".boundingelem",{
        y: 0,
        duration: 1.6,
        ease: Expo.easeInOut,
        stagger: 0.2,
        delay: -1
    })
    .from("#herofooter",{
        y: -10,
        duration: 1.5,
        opacity: 0,
        ease: Expo.easeInOut,
        delay: -1
    })
}



function circleChaptaKaro() {
    // define default scale value
    var xscale = 1;
    var yscale = 1;
    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);
        xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
        xprev = dets.clientX;
        yprev = dets.clientY;
        circleMouseFollower(xscale, yscale);
        timeout = setTimeout(function () {
        document.querySelector(
            "#minicircle"
        ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        }, 100);
    });
}
function circleMouseFollower(xscale, yscale) {
    document.querySelector(
        "#minicircle"
    ).style.transform = `scale(${xscale}, ${yscale})`;
}

circleChaptaKaro();
firstPageAnim();

document.querySelectorAll(".elem1").forEach(function(elem1){
    var rotate = 0;
    var diffrot = 0;

    elem1.addEventListener("mouseleave", function (dets) {
        gsap.to(elem1.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
        });
    });

    elem1.addEventListener("mouseenter", function (dets) {
        gsap.to(elem1.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            duration: 0.5,
        });
    });

    elem1.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem1.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem1.querySelector("img"), {
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
    });
});


