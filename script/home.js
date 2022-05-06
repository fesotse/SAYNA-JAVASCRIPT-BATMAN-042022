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
    setTimeout("batslide()", 2000);
}
window.onload = batslide;