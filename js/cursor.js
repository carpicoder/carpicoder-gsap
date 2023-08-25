const follower = document.querySelector('.ball-cursor');


document.onmousemove = function(e) {
    
    gsap.to(follower, 1.5, {
        left: e.clientX,
        top: e.clientY,
        ease: Elastic.easeOut,
        translateX: "-50%",
        translateY: "-50%"
    });

}