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
const phoneBook = [];

document.getElementById("add-contact").addEventListener("click", addContact);

function addContact() {
  const name = document.getElementById("name").value;
  const number = document.getElementById("phoneNumber").value;
  phoneBook.push(new contact(name, number));
}
