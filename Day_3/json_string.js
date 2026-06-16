//used in API and Database
//stringfy() - to parsing JSON data
let student = { name: "XXXX", age:15};
let jsonData = JSON.stringify(student);
//stringify() - to convert object into JSON data


console.log(jsonData);
let objectData = JSON.parse(jsonData);
//parse() - to convert JSON data into object
console.log(objectData);
