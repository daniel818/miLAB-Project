var mentorTemplate = '<div class="item"><div class="carousel-caption"><img src="%img%" alt="mentorImg" class="img-circle profileImg">'
+ '<h1>%name%</h1><h4>%company%</h4><h3>%job%</h3><p>%paragraph%</p>'
+ '<button type="button" class="btn btn-primary btn-lg btn-block" class="meetingBTN" onclick="meetingBTN()">Set Up a Meeting</button>'
    + '<div class="mentorID" style="display: none;">%id%</div></div>';

//get a parameter from the url

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}