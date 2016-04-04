//mentor template to append
 var mentorTemplate =
'<div class="item"><div class="carousel-cover"><h2>%name%</h2><h3>%job%</h3><img src="%img%" alt="mentorImg" class="profileImg">' +
'</div><div class="carousel-caption"><div class="row"><div class="col-xs-4 col-sm-4""><div class="company">%meetings%</div><div class="label">MEETINGS</div>' +
'<div class="marker purpel"></div></div><div class="col-xs-8 col-sm-8""><div class="company">%company%</div><div class="label">COMPANY</div>' +
'<div class="marker"></div></div></div><div class="line"></div><div class="paragraph">%paragraph%</div><div class="mentorID" style="display: none;">%id%</div>' +
'</div><button type="button" class="meetingBTN" id="meetingBTN" onclick="meetingBTN()"><img src="images/Calendar-50.png" class="calender-icon">' +
'Set Up a Meeting</button><div class="mentorID" style="display: none;">%id%</div></div></div>';


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
