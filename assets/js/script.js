var submenu = document.querySelectorAll('ul li ul');

for (var eachMenu of submenu) {
    eachMenu.className = 'hide-menu';
    
}

var menuLinks = document.querySelectorAll('.menuLink');

for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function(event){
        event.preventDefault();
    })
    
}