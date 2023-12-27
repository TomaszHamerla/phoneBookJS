// projekt książka telefoniczna:
// utwórz aplikację która będzie przechowywać kontakty w pamięci
// aplikacja ma mieć możliwość dodawania nowych kontaktów, usuwania kontaktów
// wyświetlania wszystkich kontaktów
// wyszukiwania kontaktów po nazwie lub numerze telefonu
// przy dodawanu kontaktu sprawdź czy taki kontakt już istnieje - jeżeli tak to wyświetl odpowiedni komunikat
// sprawdź czy numer telefonu ma poprawny format (dla uproszczenia: ma mieć 9 znaków)
// sprawdź czy nazwa kontaktu ma poprawny format (dla uproszczenia: conajmniej 3 znaki)
// nie modyfikuj pliku index.html
class contact {
  constructor(name, number) {
    this.name = name;
    this.number = number;
  }
}
let phoneBook = [];

document.getElementById("add-contact").addEventListener("click", addContact);

function addContact() {
  const name = document.getElementById("name").value;
  const number = document.getElementById("phoneNumber").value;
  if (validData(name, number)) {
    phoneBook.push(new contact(name, number));
    displayContacts();
  }
}

function displayContacts() {
  const contactsList = document.getElementById("contactsList");
  phoneBook.forEach((contact) => {
    printContact(contact.name, contact.number);
  });
}

function printContact(name, number) {
  const contactElement = document.createElement("label");
  contactsList.appendChild(contactElement);
  contactElement.textContent = `Name: ${name}, Phone number: ${number}`;
  const btn = document.createElement("button");
  btn.setAttribute("style", "color:red");
  btn.textContent = "Remove contact";
  contactElement.appendChild(btn);

  btn.addEventListener("click", () => {
    contactElement.remove();
  });
}
function validData(name, number) {
  if (name.length > 3 && number.length > 4) {
    return true;
  } else {
    alert("Nie prawidlowy numer lub nazwa");
    return false;
  }
}
