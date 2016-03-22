Parse.initialize("EoP2P9g5Ic5lc6Mxebgx4FcEA6Ro7AQmsAtKMRUL", "9NY3ogqKjbPQwDz1V5uVTMMaQQar8T5LzCr6HucI");

var TestObject = Parse.Object.extend("TestObject");
var newTestObject = new TestObject();
testObject.save({test1: "test1.2Data", test2: "test2.2Data", test3: "test3.2Data" }).then(function(object) {
    alert("A new testObject was created");
});

var query = new Parse.Query(TestObject);
query.get("h50KBRTFCf", {
  success: function(testObject) {
    alert("The object was retrieved successfully.");
    testObject.set("test1", "changed1");
    testObject.set("test2", "changed2");
    testObject.set("skills", ["ux\\ui","producr managment"])
    testObject.add("skills", "designer");
    testObject.save();

  },
  error: function(object, error) {
     alert("The object was not retrieved successfully.");
    // error is a Parse.Error with an error code and message.
  }
});









