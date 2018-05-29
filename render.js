var video = document.getElementById('video')//, fraction = 0.001;
//var clickedvid = false;

$('.large-vid').click(function(){
    if(video.muted){
        video.muted = false;
        $('#mute-button').css("opacity", "0");
        $('#sound-button').css("opacity", "1");
    }else{
        video.muted = true;
        $('#mute-button').css("opacity", "1");
        $('#sound-button').css("opacity", "0");
    }
});

$(window).scroll(function() {
    if (!checkVisible($('#layer'))) {
        video.pause();
    }else{
        video.play();
    }
});

function checkVisible( elm, evalType ) {
    evalType = evalType || "visible";

    var vpH = $(window).height(), // Viewport Height
        st = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();

    if (evalType === "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
    if (evalType === "above") return ((y < (vpH + st)));
}

/*function checkScroll() {
    if (!clickedvid) {
        var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
        b = y + h, //bottom
        visibleX, visibleY, visible;

        visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
        visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

        visible = visibleX * visibleY / (w * h);

        if (visible > fraction) {
            video.play();
        } else {
            video.pause();
        }
    }
}

checkScroll();
window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);

var layer = document.getElementById('layer');
layer.onclick = (function() {
    if (video.paused) {
        video.play();
        clickedvid = false;
    } else {
        video.pause();
        clickedvid = true;
    }
});*/
