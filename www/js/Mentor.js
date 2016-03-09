
Parse.initialize("EoP2P9g5Ic5lc6Mxebgx4FcEA6Ro7AQmsAtKMRUL", "9NY3ogqKjbPQwDz1V5uVTMMaQQar8T5LzCr6HucI");

function saveMentorForm(){
  var category = document.getElementById("category").value;
  var name = document.getElementById("name").value;
  var job = document.getElementById("job").value;
  var company = document.getElementById("company").value;
  var paragraph = document.getElementById("paragraph").value;
  var img = "http://www.monologuedb.com/wp-content/uploads/2011/02/yoda1.jpg";
  var mail = document.getElementById("mail").value;
  var linkedinLink = "https://www.linkedin.com/in/dror-biran-a8095b78";
  saveMentor(category,name,job,company,paragraph,img,mail,linkedinLink);
}

