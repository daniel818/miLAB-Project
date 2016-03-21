Parse.initialize("EoP2P9g5Ic5lc6Mxebgx4FcEA6Ro7AQmsAtKMRUL", "9NY3ogqKjbPQwDz1V5uVTMMaQQar8T5LzCr6HucI");

//Current Mantor fields
var currentMentor = new Object();

//saving all the data we get from linkedIn to the currentMentor
function saveLinkedinMember(member) {
    currentMentor.linkedinID = member.id;
    currentMentor.fullName = member.firstName + " " + member.lastName;
    currentMentor.job = member.headline;
    try {
        currentMentor.company = member.positions.values[0].company.name;
    } catch(err) {
        currentMentor.company = "freelance";
    }
    try {
        currentMentor.img = member.pictureUrls.values[0];
    } catch(err) {
        currentMentor.img = "http://www.monologuedb.com/wp-content/uploads/2011/02/yoda1.jpg";
    }
    currentMentor.linkedinLink = member.publicProfileUrl;
    currentMentor.mail = member.emailAddress;
    //moving to the mentor fields
    document.getElementById("linkedinSection").style.display = "none";
    document.getElementById("mentorFormSection").style.display="block";

}

//saving all mentor details after linkedinlogin and filling the form
function saveMentorForm(e) {
    e.preventDefault();
    var category = document.getElementById("category").value;
    var paragraph = document.getElementById("paragraph").value;
    saveMentor(category, currentMentor.fullName, currentMentor.job, currentMentor.company, paragraph, currentMentor.img, currentMentor.mail, currentMentor.linkedinLink, currentMentor.linkedinID);
}

//Adding a mentor to the carousel
function appendMentor(fullName, job, company, paragraph, img) {
    var formattedMentor = mentorTemplate.replace("%name%", fullName);
    formattedMentor = formattedMentor.replace("%job%", job);
    formattedMentor = formattedMentor.replace("%company%", company);
    formattedMentor = formattedMentor.replace("%paragraph%", paragraph);
    formattedMentor = formattedMentor.replace("%img%", img);
    $("#mentorsTinder").append(formattedMentor);
}

//After loading the mentorProfile page this function load the mentor from parse
//and append the mentor details to the profile page
function loadMentorProfile() {
    alert("congrats! You are now a Yodapp Mentor!");
    linkedinID = getParameterByName('linkedinID');
    mentor = fingMentorByLinkedinID(linkedinID);
}

function searchMentors() {
    var category = document.getElementById("categorySearch").value;
    window.location = "carousel.html" + "?category=" + category + "&";
}

function becomeMentorBTN() {
    document.getElementById("becomeMentorSection").style.display = "none";
    document.getElementById("linkedinSection").style.display="block";
}

$("#mentorForm").find("button").on("click", saveMentorForm);

$("#becomeMentorBTN").on("click", becomeMentorBTN);




