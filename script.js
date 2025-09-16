function loadingAnimation(){
    
let tl = gsap.timeline()
tl.from(".line h1",{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5,
});
tl.from("#line1-part1",{
    opacity:0,
    onStart:function() {
        let h5timer = document.querySelector("#line1-part1 h5")
        let count = 0
        setInterval(function(){
           if(count<100){
              h5timer.innerHTML = count++
            }
            else{
               h5timer.innerHTML = count
            }
        },33);
    },
});
tl.to(".line h2",{
    animationName:"anime",
    opacity:1
})
tl.to("#loader",{
    opacity:0,
    duration:0.4,
    delay:3.5,
});
tl.from("#page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    duration:0.6,
    ease:Power4
})

tl.to("#loader",{
    display:"none"
})

tl.from("#nav",{
    opacity:0
})

tl.from("#hero1 h1,#hero2 h1,#hero3 h2, #hero3 h3, #hero4 h1",{
    y:120,
    stagger:0.2
})
}

loadingAnimation()



function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
    gsap.to("#crsr",{
        left:dets.x,
        top:dets.y
    })
});
Shery.makeMagnet("#nav-part2 h4");
}

cursorAnimation()
