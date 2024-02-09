const submenu = document.querySelectorAll('ul li ul');

function hideMenus() {
    for (let eachMenu of submenu) {
        eachMenu.className = 'hide-menu';
        
    }
}
hideMenus();

const menuLinks = document.querySelectorAll('.menulink');

for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function(event){
        event.preventDefault();

        const thisMenu = this.parentNode.querySelector('ul');

        if (thisMenu.classList.contains('hide-menu')) {
            hideMenus();
            thisMenu.className = 'show-menu';

        } else{
            thisMenu.className = 'hide-menu';
        }
    });
    
}