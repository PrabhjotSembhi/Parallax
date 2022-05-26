const parallax = document.querySelectorAll(".parallax");
const barallax = document.querySelectorAll(".Barallax");

let scroll1;
let scroll2;

window.addEventListener('scroll', ()=>{
    scroll1 = window.pageYOffset;

    console.log(scroll1);

    parallax.forEach(element =>{
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll1 * speed}px)`;

    })
})


window.addEventListener('scroll', ()=>{
  

    if (scroll1 > 901) {
        scroll2 = scroll1 - 900;

        barallax.forEach(element =>{
            let speed = element.dataset.speed;
            element.style.transform = `translateY(${scroll2 * speed}px)`;
            
        })
    }

})


