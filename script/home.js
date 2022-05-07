// mise en place du scroll avec les fleches et ReseauSocio
$(window).scroll(function(){
    let scroll = $(window).scrollTop();
    $('.flecheRSO').css('top',scroll +250+"px" );
})
// document.getElementsByClassName('sub').addEventListner("click",agree);
// function agree(){

//     $(".Popup").style.display = "block";
// }

// mise en place de batmanslide
var img = ['Batslider1.png','Batslider2.png','Batslider3.png', 'Batslider4.png', 'Batslider5.png','Batslider6.png','Batslider7.png', 'Batslider8.png','Batslider9.png','Batslider10.png']
function batslide(){
    let i = 0;
    document.slider.src="/Assets/Illustrations/Home/" + img[i];
    if (i<img.length-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("batslide()", 3000); //défilement tous les 3s
}
window.onload = batslide;
const ratio = 0.5
//animation sur la page
const options={
    rootMargin:'0px',
    threshold: 0.5
}

//FadeInh1
const fadeIn = function (entries, observer){
    entries.forEach(entry=>{
        if (entry.intersectionRatio > ratio){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target)
        }
    })
}
const observer  =new IntersectionObserver (fadeIn, options);
document.querySelectorAll('h1').forEach(function(r){
    observer.observe(r);
})

// fondu effect
const fondu = function (entries, observeri){
    entries.forEach(function(entry){
        if (entry.intersectionRatio> ratio){
            entry.target.classList.add(f_visible);
            observeri.unobserve(entry.target);
        }
    })
}
const observei = new IntersectionObserver(fondu, options);
document.querySelectorAll('.fondu').forEach(function(r){
    observei.observe(r);
})

var cit=document.getElementsByClassName("cit")
function diapo(){
    let i = 0;
    cit[i].style.display = "block";
    for (let j=0; j<cit.length; j++){
        if (j==i){
            cit[j].style.display = "block";
        }
        else{
            cit[j].style.display = "none";
        }
    }
    if (i<cit.length-1){
        i++;
    }
    else{
        i = 0;
    }
    setTimeout("diapo()",3000)
}
window.onload = diapo();