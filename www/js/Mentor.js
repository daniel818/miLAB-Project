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



//template helper
/*(function(){
  var cache = {};
  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById("#dror").innerHTML) : 
      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +    
        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +   
        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");
    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();*/

//console.log(tmpl("dror", {fullName: "dror", url: "http://www.amazon.com"}));

