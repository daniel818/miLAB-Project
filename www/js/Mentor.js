Parse.initialize("EoP2P9g5Ic5lc6Mxebgx4FcEA6Ro7AQmsAtKMRUL", "9NY3ogqKjbPQwDz1V5uVTMMaQQar8T5LzCr6HucI");

//Saving Objects
var Mentor = Parse.Object.extend("Mentor");
var mentor = new Mentor();

// mentor.save({
//   name: "test name",
//   job: "test job",
//   company: "test company",
//   paragraph: "testing paragraph"
// }, {
//   success: function(mentor) {
//     alert("The object was saved successfully");
//   },
//   error: function(mentor, error) {
//     alert("The save failed");
//   }
// });

findMentorbyJob("Jedi");

/* functions */

function findMentorbyJob(job) {
  var query = new Parse.Query(Mentor);
  query.equalTo("job", job);
  query.find({
  success: function(results) {
    alert("Successfully retrieved " + results.length + " metors");
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) {
      var object = results[i];
      console.log(object.id + ' - ' + object.get('name') + ' - ' + object.get('job') + ' - ' + object.get('company') + ' - ' + object.get('paragraph'));
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
}