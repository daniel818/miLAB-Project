Parse.initialize("EoP2P9g5Ic5lc6Mxebgx4FcEA6Ro7AQmsAtKMRUL", "9NY3ogqKjbPQwDz1V5uVTMMaQQar8T5LzCr6HucI");


function saveMentorForm(e){
  console.log('saveMentorForm', e);
  e.preventDefault();
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

$("#mentorForm").find("button").on("click", saveMentorForm);

//template helper
(function(){
  var cache = {};
  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) : 
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
})();

console.log(tmpl("dror", {name: "dror", url: "http://www.amazon.com"}));