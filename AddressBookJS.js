console.log("Welcome to Address Book Program");
const prompt = require("prompt-sync")();
const validateContact = require("./ValidateContacts.js");
let addressBookArray = [];
var personInfo;
class PersonInfo {
  firstName;
  lastName;
  address;
  city;
  state;
  zip;
  phoneNumber;
  email;
  constructor(
    firstName,
    lastName,
    address,
    city,
    state,
    zip,
    phoneNumber,
    email
  ) {
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
function addContact() {
  let firstName = prompt("Enter Your First Name ");
  getFirstName(firstName);
  let lastName = prompt("Enter Your Last Name ");
  let address = prompt("Enter Your address ");
  let city = prompt("Enter Your city ");
  let state = prompt("Enter Your state ");
  let zip = prompt("Enter Your Zip Code ");
  let phNumber = prompt("Enter Your Mobile Number ");
  let email = prompt("Enter Your email ");
  personInfo = new PersonInfo(
    firstName,
    lastName,
    address,
    city,
    state,
    zip,
    phNumber,
    email
  );
  try {
    validateContact.validateFirstName(personInfo.firstName);
    validateContact.validateLastName(personInfo.lastName);
    validateContact.validateAddress(personInfo.address);
    validateContact.validateCity(personInfo.city);
    validateContact.validateState(personInfo.state);
    validateContact.validateZip(personInfo.zip);
    validateContact.validatePhoneNumber(personInfo.phoneNumber);
    validateContact.validateEmail(personInfo.email);
  } catch (invalid) {
    console.error(invalid);
    addContact();
  }
}
function editContact() {
  let contactFound = 0;
  let name = prompt("Enter Your First Name of the person to edit ");
  for (let i = 0; i < addressBookArray.length; i++) {
    if (addressBookArray[i].firstName == name) {
      contactFound = 1;
      console.log(
        "Enter 1 to edit First Name, 2 for lastName, 3 for address, 4 for city"
      );
      console.log(
        " Enter 5 for state, 6 for Zip Code, 7 for phone number, 8 for email"
      );
      let choiceEdit = prompt("Enter Your choice to edit ");
      switch (choiceEdit) {
        case "1":
          let firstNameEdit = prompt("Enter Your First Name ");
          try {
            validateContact.validateFirstName(firstNameEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          addressBookArray[i].firstName = firstNameEdit;
          break;
        case "2":
          let lastNameEdit = prompt("Enter Your Last Name ");
          try {
            validateContact.validateLastName(lastNameEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          addressBookArray[i].lastName = lastNameEdit;
          break;
        case "3":
          let addressEdit = prompt("Enter Your address ");
          try {
            validateContact.validateAddress(addressEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          addressBookArray[i].address = addressEdit;
          break;
        case "4":
          let cityEdit = prompt("Enter Your city ");
          try {
            validateContact.validateCity(cityEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          addressBookArray[i].city = cityEdit;
          break;
        case "5":
          let stateEdit = prompt("Enter Your state ");
          try {
            validateContact.validateState(stateEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          addressBookArray[i].state = stateEdit;
          break;
        case "6":
          let zipEdit = prompt("Enter Your Zip Code ");
          try {
            validateContact.validateZip(zipEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          addressBookArray[i].zip = zipEdit;
          break;
        case "7":
          let phNumberEdit = prompt("Enter Your Mobile Number ");
          try {
            validateContact.validatePhoneNumber(phNumberEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          addressBookArray[i].phoneNumber = phNumberEdit;
          break;
        case "8":
          let emailEdit = prompt("Enter Your email ");
          try {
            validateContact.validateEmail(emailEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          addressBookArray[i].email = emailEdit;
          break;
      }
    }
  }
  if (contactFound == 0) console.log("Contact Not Found");
}
function deleteContact() {
  let contactFoundDelete = 0;
  let name = prompt("Enter Your First Name of the person to delete ");
  for (let i = 0; i < addressBookArray.length; i++) {
    if (addressBookArray[i].firstName == name) {
      contactFoundDelete = 1;
      addressBookArray.splice(i, 1);
      console.log("Contact Deleted");
      break;
    }
  }
  if (contactFoundDelete == 0) console.log("Contact Not Found");
}
function countContact() {
  return addressBookArray.length;
}
function getFirstName(firstNameCheck) {
  return firstNameCheck;
}
let sortAddressBook = () => {
  addressBookArray.sort((a, b) => {
    let firstName1 = a.firstName.toLowerCase();
    let firstName2 = b.firstName.toLowerCase();
    if (firstName1 < firstName2) {
      return -1;
    }
    if (firstName1 > firstName2) {
      return 1;
    }
    return 0;
  });
};
let sortAddressBookByCity = () => {
  addressBookArray.sort((a, b) => {
    let city1 = a.city.toLowerCase();
    let city2 = b.city.toLowerCase();
    if (city1 < city2) {
      return -1;
    }
    if (city1 > city2) {
      return 1;
    }
    return 0;
  });
};
let sortAddressBookByState = () => {
  addressBookArray.sort((a, b) => {
    let state1 = a.state.toLowerCase();
    let state2 = b.state.toLowerCase();
    if (state1 < state2) {
      return -1;
    }
    if (state1 > state2) {
      return 1;
    }
    return 0;
  });
};
let sortAddressBookByZip = () => {
  addressBookArray.sort((a, b) => {
    let zip1 = a.zip.toLowerCase();
    let zip2 = b.zip.toLowerCase();
    if (zip1 < zip2) {
      return -1;
    }
    if (zip1 > zip2) {
      return 1;
    }
    return 0;
  });
};
let i = 0;
while (i == 0) {
  console.log(
    "Enter 1 to add contacts, 2 to edit Contacts, 3 to exit, 4 to Delete Contacts, 5 to get count of contacts, 6 to sort entries by name, 7 to sort entries by city, 8 to sort entries by State, 9 to sort entries by Zip Code"
  );
  let choice = prompt("Enter your choice ");
  switch (choice) {
    case "1":
      addContact();
      addressBookArray.push(personInfo);
      break;
    case "2":
      editContact();
      break;
    case "3":
      i = 1;
      break;
    case "4":
      deleteContact();
      break;
    case "5":
      console.log(
        "The number of Contacts in the address book are: " + countContact()
      );
      break;
    case "6":
      sortAddressBook();
      console.log("Sorted Address Book By Name");
      for (let k = 0; k < addressBookArray.length; k++) {
        console.log(addressBookArray[k]);
      }
      break;
    case "7":
      sortAddressBookByCity();
      console.log("Sorted Address Book By City");
      for (let k = 0; k < addressBookArray.length; k++) {
        console.log(addressBookArray[k]);
      }
      break;
    case "8":
      sortAddressBookByState();
      console.log("Sorted Address Book By State");
      for (let k = 0; k < addressBookArray.length; k++) {
        console.log(addressBookArray[k]);
      }
      break;
    case "9":
      sortAddressBookByZip();
      console.log("Sorted Address Book By Zip");
      for (let k = 0; k < addressBookArray.length; k++) {
        console.log(addressBookArray[k]);
      }
      break;
  }
}
for (let j = 0; j < addressBookArray.length; j++) {
  console.log(addressBookArray[j]);
}
