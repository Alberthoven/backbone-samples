// import ConsultantModel.js

//var cm = new ConsultantModel({age: 21, name: 'Lemmy', surname: 'Kilmister'}); // OK
var cm = new ConsultantModel({age: '21', surname: 666});
console.log('isValid:', cm.isValid()); // isValid: false
console.log('validationError:', cm.validationError); // validationError: Object {age: "Not valid age", name: "Empty name", surname: "Not valid surname"}
console.log('validate:', cm.validate(cm.attributes)); // validate: Object {age: "Not valid age", name: "Empty name", surname: "Not valid surname"}
