/*(function(){
	console.log(tmpl("pledge_tmpl", {name: "dror", url: "http://www.amazon.com"}));

})();*/


Parse.initialize("EoP2P9g5Ic5lc6Mxebgx4FcEA6Ro7AQmsAtKMRUL", "9NY3ogqKjbPQwDz1V5uVTMMaQQar8T5LzCr6HucI");

var Mentor = Parse.Object.extend("Mentor");

function saveMentor(category,name,job,company,paragraph,img,mail,linkedinLink) {
	  var mentor = new Mentor();
	  mentor.save({
	  category: category,
	  name: name,
	  job: job,
	  company: company,
	  paragraph: paragraph,
	  img: "http://www.monologuedb.com/wp-content/uploads/2011/02/yoda1.jpg",
	  mail: mail,
	  linkedinLink: "https://www.linkedin.com/in/dror-biran-a8095b78",
	  numMeetings: 0
	}, {
	  success: function(mentor) {
	    alert("The object was saved successfully");
	  },
	  error: function(mentor, error) {
	    alert("The save failed");
	  }
	});
}



/* functions */

function findMentorByJob() {
  var job = document.getElementById("jobSearch").value;
  var query = new Parse.Query(Mentor);
  query.equalTo("job", job);
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

function appendMentor(name,job,company,paragraph,img){
  var formattedMentor = mentorTemplate.replace("%name%", name);
  formattedMentor = formattedMentor.replace("%job%", job);
  formattedMentor = formattedMentor.replace("%company%", company);
  formattedMentor = formattedMentor.replace("%paragraph%", paragraph);
  formattedMentor = formattedMentor.replace("%img%", img);
  $("#mentorsTinder").append(formattedMentor);
}