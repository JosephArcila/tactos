import constants from "./Constants";

const Contact = ({ contacto }) => {
  let media = "Nuevo";
  validateContactFields(contacto);
  return (
    <div className="contact">
      <div className="row align-items-center">
        <div className="col-4">
          <img
            className="icon"
            alt={`Imagen de: ${contacto.Nickname}`}
            src={contacto.foto}
          />
        </div>
        <div className="col-8">
          <div className="row">
            <div className="name-rating col-8">
              <h3>{contacto.Nickname}</h3>
              <p className="rating">{media}</p>
            </div>
            <div className="col-4 map">
              <a
                href={`https://www.google.com/maps/place/${contacto.Ubicacion}`}
                target="_blank"
                rel="noreferrer"
              >
                {contacto.Ubicacion}
              </a>
            </div>
          </div>
        </div>
      </div>
      <ul className="row_skills">
        {contacto.Temas.map((tema) => (
          <li>{tema}</li>
        ))}
      </ul>

      <div className="row_tooltip">
        Ver más &gt;
        <span className="tooltiptext" id="overflow">
          {contacto.Descripcion}
        </span>
      </div>

      <div className="text-center">
        <a
          href={`https://wa.me/${contacto.Contacto}`}
          target="_blank"
          rel="noreferrer"
        >
          <button className="button-contacto" type="button">
            {contacto.Publico}
          </button>
        </a>
      </div>
    </div>
  );
};

function validateContactFields(contact, media) {
  contact.foto =
    contact.foto == null || contact.foto === ""
      ? constants.IMAGE_CONTACTOS_PRO
      : contact.foto;

  contact.Contacto =
    contact.Contacto == null || contact.Contacto === ""
      ? constants.ADVISER_CONTACTOS_PRO
      : contact.Contacto;
}

export default Contact;
