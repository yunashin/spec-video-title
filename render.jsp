<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://platform.washingtonpost.com/pagebuilder" prefix="pb" %>

<div class="row">
    <div class="col-xs-12 large-vid">
        <div id="layer"></div>
        <video muted autoplay id="video" preload="auto">
            <source src="${custom.videoURL}"/>
        </video>
    </div>
    <div class="center-text">${custom.title}</div>
    <div id="mute-button"><span class="glyphicon glyphicon-volume-off"></span></div>
    <div id="sound-button" style="opacity:0"><span class="glyphicon glyphicon-volume-up"></span></div>
</div>
