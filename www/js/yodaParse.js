
Parse.initialize("EoP2P9g5Ic5lc6Mxebgx4FcEA6Ro7AQmsAtKMRUL", "9NY3ogqKjbPQwDz1V5uVTMMaQQar8T5LzCr6HucI");

var Mentor = Parse.Object.extend("Mentor");
var Student = Parse.Object.extend("Student");
var Meeting = Parse.Object.extend("Meeting");
var mentorMail;
var studentMail;
function saveMentor(category,fullName,job,company,paragraph,img,mail,linkedinLink,linkedinID) {
	  var mentor = new Mentor();
	  mentor.save({
	  category: category,
	  name: fullName,
	  job: job,
	  company: company,
	  paragraph: paragraph,
	  img: img,
	  mail: mail,
	  linkedinLink: linkedinLink,
      linkedinID : linkedinID,
	  numMeetings: 0
	}, {
	  success: function(mentor) {
      window.location = "mentorProfile.html" + "?linkedinID=" + currentMentor.linkedinID + "&";
      },
	  error: function(mentor, error) {
	    alert("The save failed");
	  }
	});
}
//find mentor by linkedinID
function fingMentorByLinkedinID (linkedinID){
    var query = new Parse.Query(Mentor);
    query.equalTo("linkedinID", linkedinID);
    query.first({
        success: function(object) {
            console.log(object.get("name"));
            document.getElementById('img').src = object.get('img');
            document.getElementById('name').innerHTML = object.get('name');
            document.getElementById('company').innerHTML = object.get('company');
            document.getElementById('job').innerHTML = object.get('job');
            document.getElementById('paragraph').innerHTML = object.get('paragraph');
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
}


//finding mentor by category
function findMentorByCategory() {
  category = getParameterByName('category');
  document.getElementById("category_header").innerHTML = category;
  var query = new Parse.Query(Mentor);
  query.equalTo("category", category);
  query.find({
  success: function(results) {
    console.log("Successfully retrieved" + results.length + " metors");
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) {
      var object = results[i];
      appendMentor(object.get('name'),object.get('job'),object.get('company'),object.get('paragraph'),object.get('img'),object.id,object.get('numMeetings'));
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
  });
  document.getElementById("carousel-example-generic").style.display = "inherit";
}

//Retrieve Mentor Info.

function retrieveMentorInfo (id) {
    var query = new Parse.Query(Mentor);
    query.get( id , {
        success: function (mentor) {
            mentorMail = mentor.get("mail");
            console.log(mentorMail);
        },
        error: function (object, error) {
            console.log("fail");
        }
    });
}

//save new user
function saveUser(){
    var name = document.getElementById("signup-name1").value;
     studentMail = document.getElementById("signup-email1").value;

    var student = new Student();

    student.set("username", name );
    student.set("email", studentMail);


    student.save(null, {

        success: function(student) {
            console.log("User saved");

            document.getElementById("signup1").style.display = "none";
            document.getElementById("mailFormSection").style.display="block";

        }, error: function(student, error){

            console.log("signup error: " + error.message);
            alert("signup error:" + error.message);
        }
    });
}

function createMeeting(){
    console.log("meeting was saved")
    var meeting = new Meeting();

    meeting.set("Student", studentMail );
    meeting.set("Mentor", mentorMail);


    meeting.save(null, {

        success: function(meeting) {
            alert("Success creating meesage");

        }, error: function(meeting, error){
            alert("signup error:" + error.message);
        }
    });
}