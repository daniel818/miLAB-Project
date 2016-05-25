
Parse.initialize("EoP2P9g5Ic5lc6Mxebgx4FcEA6Ro7AQmsAtKMRUL", "9NY3ogqKjbPQwDz1V5uVTMMaQQar8T5LzCr6HucI");

var Mentor = Parse.Object.extend("Mentor");
var Student = Parse.Object.extend("Student");
var Meeting = Parse.Object.extend("Meeting");
var mentorMail;
var studentMail;
var mailContent;

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
            document.getElementById('numMeeting').innerHTML = object.get('numMeetings');
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
      appendMentor(i,object.get('name'),object.get('job'),object.get('company'),object.get('paragraph'),object.get('img'),object.id,object.get('numMeetings'));
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
function saveUser(facebookID,userName,userEmail){
    //saving  the student email for the save meeting funvtion
    studentMail = userEmail;
    //checking if user exists
    var query = new Parse.Query(Student);
    query.equalTo("facebookID", facebookID);
    query.find({
        success: function(object) {
            // if It is a new user
            if (object.length == 0){
                //creating a new user
                var student = new Student();
                student.set("facebookID", facebookID);
                student.set("username", userName );
                student.set("email", studentMail);

                student.save(null, {
                    success: function(student) {
                        console.log("New User saved");
                        document.getElementById("facebook").style.display = "none";
                        document.getElementById("mailFormSection").style.display="block";
                        document.getElementById("number-circle").innerHTML = "2";
                    }, error: function(student, error){
                        console.log("signup error: " + error.message);
                        alert("signup error:" + error.message);
                    }
                });
            } else {
                console.log("Found existing user");
                document.getElementById("facebook").style.display = "none";
                document.getElementById("mailFormSection").style.display="block";
                document.getElementById("number-circle").innerHTML = "1";
            }
        },
        error: function(error) {
            console.log("finding user error: " + error.message);
        }
    });
}

function createMeeting(){
    mailContent = document.getElementById("paragraph").value;
    var meeting = new Meeting();
    meeting.set("Student", studentMail );
    meeting.set("Mentor", mentorMail);
    meeting.set("Content", mailContent);
    meeting.save(null, {
        success: function(meeting) {
            console.log("mail sent from " + studentMail + " to " + mentorMail);
            console.log(meeting.id);
            //window.location = 'mailsrv.php?meeting_id='+meeting.id;
            //window.location = 'mailsrv.php?studentMail=' + studentMail + '&mentorMail=' + mentorMail;
            sentMail(studentMail,mentorMail,mailContent);
        }, error: function(meeting, error){
            alert("signup error:" + error.message);
        }
    });
}
function sentMail(from,to,content){
    var data = 'studentMail=' + from + '&mentorMail=' + to + '&con=' + content;
    var xhttp;
    xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            //cfunc(xhttp);
           // window.location = '/success.html';
        }
    };
    xhttp.open("POST", "/mailsrv.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(data);
    window.location = '/success.html'
}