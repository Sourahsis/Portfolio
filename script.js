window.onscroll = function () {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    // Calculate the new position based on the scroll
    var newPosition = (scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    // Update the position of the corner image
    document.getElementById('corner-image-container').style.transform = 'translate(-' + newPosition + 'vw, ' + newPosition + 'vh)';
};