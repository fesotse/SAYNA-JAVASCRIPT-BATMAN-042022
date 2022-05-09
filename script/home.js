// mise en place du scroll avec les fleches et ReseauSocio
$(window).scroll(function(){
    let scroll = $(window).scrollTop();
    $('.flecheRSO').css('top',scroll +250+"px" );
})


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
document.querySelectorAll('.fadein').forEach(function(r){
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

//zoom on image
const zoom = function (entries, observeii){
    entries.forEach(function (entry){
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('visible');
            observeii.unobserve(entry.target);
        }
    })
}

const observeii = new IntersectionObserver(zoom, options);
document.querySelectorAll('.zoom').forEach(function(r) {
    observeii.observe(r);
})


//show of figcaption in every figure
const figcap = document.getElementsByClassName('figcap');
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
figcap1.addEventListener('onmouseover', function(e){
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

document.getElementsByClassName("demo").onmouseover = function() {mouseOver()};
document.getElementsByClassName("demo").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementsByClassName("demo").style.color = "red";
}

function mouseOut() {
  document.getElementsByClassName("demo").style.color = "black";
}