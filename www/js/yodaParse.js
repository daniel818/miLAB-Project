/*(function(){
	console.log(tmpl("pledge_tmpl", {fullName: "dror", url: "http://www.amazon.com"}));

})();*/


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
	    console.log("The Mentor was saved successfully:");
      console.log(category);
      console.log(fullName);
      console.log(job);
      console.log(company);
      console.log(paragraph);
      console.log(img);
      console.log(mail);
      console.log(linkedinLink);
      console.log(linkedinID);
	  },
	  error: function(mentor, error) {
	    alert("The save failed");
	  }
	});
}



/* functions */

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

function appendMentor(fullName,job,company,paragraph,img){
  var formattedMentor = mentorTemplate.replace("%name%", fullName);
  formattedMentor = formattedMentor.replace("%job%", job);
   formattedMentor = formattedMentor.replace("%company%", company);
  formattedMentor = formattedMentor.replace("%paragraph%", paragraph);
  formattedMentor = formattedMentor.replace("%img%", img);
  $("#mentorsTinder").append(formattedMentor);
}

