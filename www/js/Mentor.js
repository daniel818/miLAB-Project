Parse.initialize("EoP2P9g5Ic5lc6Mxebgx4FcEA6Ro7AQmsAtKMRUL", "9NY3ogqKjbPQwDz1V5uVTMMaQQar8T5LzCr6HucI");

//Current Mantor fields
var currentMentor = new Object();

//saving all the data we get from linkedIn to the currentMentor
function saveLinkedinMember(member){
  currentMentor.linkedinID = member.id;
  currentMentor.fullName = member.firstName + " " + member.lastName;
  currentMentor.job = member.headline;
  if (member !== undefined) {
    currentMentor.company = member.positions.values[0].company.name;    
  } else {
    currentMentor.company = "";
  }
  currentMentor.img = member.pictureUrls.values[0];
  currentMentor.linkedinLink = member.publicProfileUrl;
  currentMentor.mail = member.emailAddress;
}


//saving all mentor details after linkedinlogin and filling the form
function saveMentorForm(e){
  e.preventDefault();
  var category = document.getElementById("category").value;
  var paragraph = document.getElementById("paragraph").value;
  saveMentor(category,currentMentor.fullName,currentMentor.job,currentMentor.company,paragraph,currentMentor.img,currentMentor.mail,currentMentor.linkedinLink,currentMentor.linkedinID);
}

$("#mentorForm").find("button").on("click", saveMentorForm);
