$('ul li ul').hide();

$('.menulink').click(function(){
    var thisMenu = $(this).next('ul');
    thisMenu.toggle();
})