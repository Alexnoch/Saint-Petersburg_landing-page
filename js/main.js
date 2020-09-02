$("a").click(function() {

    let linkhref = $(this).attr("href");

    let scrollHeight = $(linkhref).offset().top;

    console.log($(this).attr("href"));

    $("html, body").animate({
        scrollTop: scrollHeight
    },1000);
});


var menu = document.querySelector('.menu-btn');  
menu.addEventListener('click',openMenu,false);
// Меню
var menuClosedbtn = document.querySelector('.menu-btn-closed');
menuClosedbtn.addEventListener('click',closedMenu,false);  // Меню Крестик

var staticMenu = document.querySelectorAll('.static-menu');


function openMenu(){
    menu.style.display = 'none';
    menuClosedbtn.style.display ='block';
    for(var i=0; i<staticMenu.length; i++){
        staticMenu[i].style.display = 'block';
    }
}

function closedMenu(){
    menu.style.display = 'block';
    menuClosedbtn.style.display ='none';
    for(var i=0; i<staticMenu.length; i++){
        staticMenu[i].style.display = 'none';
    }
};


let auto = [1,2,3,4,9,9,9];

console.log(auto[auto.length-5]);