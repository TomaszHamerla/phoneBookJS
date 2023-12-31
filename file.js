let contacts = [];

document.getElementById("add-contact").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const number = document.getElementById("phoneNumber").value;
  console.log(name + number);
  const contactAdded = addContact(name, number);
  if (contactAdded) {
    document.getElementById("name").value = "";
    document.getElementById("phoneNumber").value = "";
  }
});

document.getElementById("search").addEventListener("input", (event) => {
  searchContact(event.target.value);
});

function searchContact(serchPhrase) {
  const fileteredContacts = contacts.filter(
    (c) => c.name.includes(serchPhrase) || c.number.includes(serchPhrase)
  );
  displayContacts(fileteredContacts);
}

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
  return true;
}

function displayContacts(contactsToDisplay) {
  const contactList = document.getElementById("contactsList");
  contactList.innerHTML = "";
  contactsToDisplay.forEach((c) => {
    const contactDiv = document.createElement("div");
    contactDiv.classList = "list-group-item";
    contactDiv.textContent = `Name: ${c.name}, phone number: ${c.number}`;

    const removeButton = document.createElement("button");
    removeButton.classList = "btn btn-danger float-right";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => removeContact(c.name));
    contactDiv.appendChild(removeButton);
    contactList.appendChild(contactDiv);
  });
}

function removeContact(name) {
  contacts = contacts.filter((c) => c.name !== name);
  displayContacts(contacts);
}
