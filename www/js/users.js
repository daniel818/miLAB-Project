Parse.initialize("EoP2P9g5Ic5lc6Mxebgx4FcEA6Ro7AQmsAtKMRUL", "9NY3ogqKjbPQwDz1V5uVTMMaQQar8T5LzCr6HucI");

var mentorIdString;
var mentorMail;



function meetingBTN(){
    var mentorID = document.getElementsByClassName("mentorID");
    var i = $(".active").index();
    console.log(mentorID[i].textContent);
    mentorIdString = mentorID[i].textContent;
    retrieveMentorInfo(mentorIdString);
    window.location = "Users.html" + "?mentorID=" + mentorIdString + "&";
}

function saveForMail() {
    var temp = getParameterByName('mentorID');
    var mentorMail = retrieveMentorInfo(temp);
}

function isCategory() {

    var input1 = document.getElementById("categorySearch1").value;
    console.log(input1);
    if (categories.indexOf(input1) > -1) {
        //In the array!
        searchMentors();

    } else {
        document.getElementById("errCategory").style.display="block";
    }

}