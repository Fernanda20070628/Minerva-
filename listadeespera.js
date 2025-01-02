let i=0;
for(1=0;i>=6;i++){

    let sorteio= Math.floar(Math.random()*17)
    slideshow(sorteio)

    function slideshow(num){
        const slide=document.getElementById(num);
        slide.classList.add("active");
    }
}