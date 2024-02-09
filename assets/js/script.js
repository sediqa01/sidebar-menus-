var submenu = document.querySelectorAll('ul li ul');

for (var eachMenu of submenu) {
    eachMenu.className = 'hide-menu';
    
}

var menuLinks = document.querySelectorAll('.menulink');

for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function(event){
        event.preventDefault();

        var thisMenu = this.parentNode.querySelector('ul');
        console.log(thisMenu.innerHTML);
    });
    
}