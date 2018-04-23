var navigation = document.getElementById('main-nav');
var socialLinks = [document.getElementById('itch'), document.getElementById('twitter'), document.getElementById('patreon')];
var socialLinksColour = '#eeeeee';

document.body.onscroll = function() {
    var distanceScrolled = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if (distanceScrolled >= 292) {
        socialLinksColour = '#212121';
        
        navigation.style.backgroundColor = 'rgba(255, 255, 255, 0.97)';
        navigation.style.color = '#212121';
        
        for (var i = 0; i < socialLinks.length; i++) {
            socialLinks[i].style.fill = socialLinksColour;
        }
    } else {
        socialLinksColour = '#eeeeee';
        
        navigation.style.backgroundColor = '';
        navigation.style.color = '#eeeeee';
        
        for (var i = 0; i < socialLinks.length; i++) {
            socialLinks[i].style.fill = socialLinksColour;
        }
    }
}

socialLinks[0].onmouseover = function() {
    socialLinks[0].style.fill = '#fa5c5c';
}

socialLinks[0].onmouseout = function() {
    socialLinks[0].style.fill = socialLinksColour;
}

socialLinks[1].onmouseover = function() {
    socialLinks[1].style.fill = '#00aced';
}

socialLinks[1].onmouseout = function() {
    socialLinks[1].style.fill = socialLinksColour;
}

socialLinks[2].onmouseover = function() {
    socialLinks[2].style.fill = '#F96854';
}

socialLinks[2].onmouseout = function() {
    socialLinks[2].style.fill = socialLinksColour;
}