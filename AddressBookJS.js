console.log("Welcome to Address Book Program");
class PersonInfo {
  firstName;
  lastName;
  address;
  city;
  state;
  zip;
  phoneNumber;
  email;
  constructor(firstName,lastName,address,city,state,zip,phoneNumber,email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
  toString() {
    return (
      "First Name = " +
      this.firstName +
      ", Last Name = " +
      this.lastName +
      ",Address = " +
      this.address +
      ",City = " +
      this.city +
      ",State = " +
      this.state +
      ",Zip = " +
      this.zip +
      ",Phone Number = " +
      this.phoneNumber +
      ",Email = " +
      this.email
    );
  }
}
let personInfo = new PersonInfo("Paresh","Praveen","Ganesh Prasad","Mangalore","Karnataka","575014","91 9731497550","paresh@gmail.com");
const validateContact = require("./ValidateContacts.js");
try {
  validateContact.validateFirstName(personInfo.firstName);
  validateContact.validateLastName(personInfo.lastName);
  validateContact.validateAddress(personInfo.address);
  validateContact.validateCity(personInfo.city);
  validateContact.validateState(personInfo.state);
  validateContact.validatePhoneNumber(personInfo.phoneNumber);
  validateContact.validateEmail(personInfo.email);
} catch (invalid) {
  console.error(invalid);
}
