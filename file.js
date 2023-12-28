let contacts = [];
document.getElementById("add-contact").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const number = document.getElementById("phoneNumber").value;
  console.log(name + number);
  addContact(name, number);
});

function addContact(name, number) {
  if (name.length < 3) {
    alert("Contact name must be atleast 3 charactes long");
    return false;
  }

  if (number.length !== 9) {
    alert("Phone number must be 9 charactes long");
    return false;
  }
  if (contacts.some((c) => c.name === name || c.number === number)) {
    alert("Contact with this name or phone number already exits");
    return false;
  }
  contacts.push({ name, number });
  displayContacts(contacts);
}
