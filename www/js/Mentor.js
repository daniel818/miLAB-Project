Parse.initialize("EoP2P9g5Ic5lc6Mxebgx4FcEA6Ro7AQmsAtKMRUL", "9NY3ogqKjbPQwDz1V5uVTMMaQQar8T5LzCr6HucI");

//Saving Objects
var Mentor = Parse.Object.extend("Mentor");

var mentor = new Mentor();

mentor.save({
  name: "test name",
  job: "test job",
  company: "test company",
  paragraph: "testing paragraph"
}, {
  success: function(mentor) {
    alert("The object was saved successfully");
  },
  error: function(mentor, error) {
    alert("The save failed");
  }
});