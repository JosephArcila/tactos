import { useState } from "react";
import Contact from "./components/Contact";
import Search from "./components/Search";
import listaContactos from "./contactos.json";
import Footer from "./components/Footer.js";

function App() {
  const [contactos, setContactos] = useState(listaContactos);

  const handleSearch = (e) => {
    let nuevosContactos = [];

    if (e.target.value === "") {
      nuevosContactos = contactos;
    } else {
      nuevosContactos = listaContactos.filter((contacto) => {
        console.log(contacto.Temas);
        return contacto.Temas.join()
          .toLocaleLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(e.target.value.toLocaleLowerCase());
      });
    }

    setContactos(nuevosContactos);
  };

  return (
    <div className="container">
      <Search handleSearch={handleSearch} />

      <div className="contact-container">
        {contactos.map((contacto) => (
          <Contact contacto={contacto} key={contacto.id} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
