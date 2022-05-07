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
const ratio = 0.5;
//animation sur la page
const options={
    rootMargin:'0px',
    threshold: ratio
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
            entry.target.classList.add('visible');
            observeri.unobserve(entry.target);
        }
    })
}
const observei = new IntersectionObserver(fondu, options);
document.querySelectorAll('.fondu').forEach(function(r){
    observei.observe(r);
})

// var cit=document.getElementsByClassName("cit")
// function diapo(){
//     let i = 0;
//     cit[i].style.display = "block";
//     for (let j=0; j<cit.length; j++){
//         if (j==i){
//             cit[j].style.display = "block";
//         }
//         else{
//             cit[j].style.display = "none";
//         }
//     }
//     if (i<cit.length-1){
//         i++;
//     }
//     else{
//         i = 0;
//     }
//     setTimeout("diapo()",3000)
// }
// $(window).onload = diapo();


//show of figcaption in every figure
const figcap = document.getElementsByTagName('figcaption');
const fig = document.getElementsByTagName('figure');
const figcap1 = figcap[0];
const figcap2 = figcap[1];
const figcap3 = figcap[2];
const figcap4 = figcap[3];
const figcap5 = figcap[4];
const figcap6 = figcap[5];
const fig1 = fig[0];
const fig2 = fig[1];
const fig3 = fig[2];
const fig4 = fig[3];
const fig5 = fig[4];
const fig6 = fig[5];
fig1.addEventListener('onmouseover', function(e){
    figcap1.style.display = 'block';
})
fig1.addEventListener('onmouseout', function(e){
    figcap1.style.display = 'none';
})
fig2.addEventListener('onmouseover', function(e){
    figcap2.style.display = 'block';
})
fig2.addEventListener('onmouseout', function(e){
    figcap2.style.display = 'none';
})
fig3.addEventListener('onmouseover', function(e){
    figcap3.style.display = 'block';
})
fig3.addEventListener('onmouseout', function(e){
    figcap3.style.display = 'none';
})
fig4.addEventListener('onmouseover', function(e){
    figcap4.style.display = 'block';
})
fig4.addEventListener('onmouseout', function(e){
    figcap4.style.display = 'none';
})
fig5.addEventListener('onmouseover', function(e){
    figcap5.style.display = 'block';
})
fig5.addEventListener('onmouseout', function(e){
    figcap5.style.display = 'none';
})
fig6.addEventListener('onmouseover', function(e){
    figcap6.style.display = 'block';
})
fig6.addEventListener('onmouseout', function(e){
    figcap6.style.display = 'none';
})
