


Parse.initialize("EoP2P9g5Ic5lc6Mxebgx4FcEA6Ro7AQmsAtKMRUL", "9NY3ogqKjbPQwDz1V5uVTMMaQQar8T5LzCr6HucI");

var Mentor = Parse.Object.extend("Mentor");

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
      alert("congrats!" + fullName + " You are now a Yodapp Mentor!");
      window.location = "mentorProfile.html" + "?linkedinID=" + currentMentor.linkedinID + "&";
      },
	  error: function(mentor, error) {
	    alert("The save failed");
	  }
	});
}
//find mentor bu linkedinID
function fingMentorByLinkedinID (linkedinID){
    var query = new Parse.Query(Mentor);
    query.equalTo("LinkedinID", category);
    query.find({
        success: function(results) {
            console.log("I found a mentor: " + object.get('name'));
            // Do something with the returned Parse.Object values
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
}


//finding mentor by category
function findMentorByCategory() {
  var category = document.getElementById("categorySearch").value;
  var query = new Parse.Query(Mentor);
  query.equalTo("category", category);
  query.find({
  success: function(results) {
    console.log("Successfully retrieved" + results.length + " metors");
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) {
      var object = results[i];
      appendMentor(object.get('name'),object.get('job'),object.get('company'),object.get('paragraph'),object.get('img'));
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
  });
  document.getElementById("carousel-example-generic").style.display = "inherit";
}


