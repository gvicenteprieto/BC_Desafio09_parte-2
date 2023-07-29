class Libro {
  /* 7 - Se reciben los nuevos parámetros 
       8 - Se asignan los nuevos parámetros a las propiedades del objeto  */
  constructor(titulo, autor, precio, isbn, paginas, idioma, foto, sinopsis) {
    this.titulo = titulo;
    this.autor = autor;
    this.precio = precio;
    this.isbn = isbn;
    this.paginas = paginas;
    this.idioma = idioma;
    this.foto = foto;
    this.sinopsis = sinopsis;
  }
  mostrarDatosEnConsola() {
    console.log(`${this.titulo}, 
          de ${this.autor}, 
          precio: ${this.precio},
          isbn: ${this.isbn}, 
          páginas: ${this.paginas}, 
          idioma: ${this.idioma}, 
          foto: ${this.foto}, 
          sinopsis: ${this.sinopsis}`);
  }
  mostrarDatosEnAlert() {
    alert(`${this.titulo}, de ${this.autor}`);
  }
  getTitulo() {
    return this.titulo;
  }

  mostrarDatos(param) {
    if (param === "alert") {
      alert(`${this.titulo}, de ${this.autor}`);
    } else if (param === "consola" || param !== "alert") {
      console.log(`${this.titulo}, de ${this.autor}`);
    }
  }
  /* 10 - Se crea el método getHtmlArticle() */
  getHtmlArticle(string = ["article"]) {
    let article = document.createElement(string);
    article.id = "article";
    let section = document.querySelector("section");
    section.appendChild(article);

    article.innerHTML = `<h2>${this.titulo}</h2>
    <h3><span class="de">de</span> ${this.autor}</h3>
    <div class="informacion">
        <a href="img/${this.foto}" 
            title="Presioná para ver la imagen en tamaño grande" target="_blank">
            <img src="img/${this.foto}" alt="Portada de Sol de medianoche"/>
        </a>
        <p>
            <span>Precio:</span>
            <span>${this.precio}</span>
        </p>
            <p>
        <span title="International Standard Book Number">ISBN:</span>
            <span>${this.isbn}</span>
        </p>
        <p>
            <span>Páginas:</span>
            <span>${this.paginas}</span>
        </p>
        <p>
            <span>Idioma:</span>
            <span>${this.idioma}</span>
        </p>
    </div>
    <div class="sinopsis">
        <p>${this.sinopsis}</p>
    </div>
    <div class="gradiente-blanco"></div>`;
  }

  delHtmlArticle(id) {
    let articleDel = document.getElementById(id);
    articleDel.remove();
  }
}

/* 9 - 1: Instancia objeto de prueba */
let libro1 = new Libro(
  "Carrie",
  "Stephen King",
  "$2.399",
  "9789871138999",
  "256",
  "Español",
  "foto.jpg",
  "El legendario debut de Stephen King, sobre una marginada adolescente y la venganza que ejerce sobre sus compañeros de clase."
);

/* 9 - 2 Visualización de datos objeto de prueba 
      Descomentar para observar*/

// libro1.mostrarDatosEnConsola();
// libro1.mostrarDatosEnAlert();
// console.log("El título del libro del objeto de prueba es: " + libro1.getTitulo());
// console.log(`El libro, de ${libro1.autor}, tiene ${libro1.paginas} páginas. Está en idioma ${libro1.idioma} y su ISBN es ${libro1.isbn}.`);

/* 11 - De forma dinámica, agregar al contenido generado por getHtmlArticle() del objeto libro1 creado en el punto 9.
Si esto funciona adecuadamente en el browser deberían ahora figurar otro libro después de los dos ya existentes en el código HTML original.*/

libro1.getHtmlArticle("article");

/* se genera un método más para desagregar el contenido de prueba*/
libro1.delHtmlArticle("article");

/* 12 - Se instancian los 4 objetos Libro comentados incialmente en el archivo JS. */
libro1 = new Libro(
  "Sol de medianoche",
  "Stephenie Meyer",
  "$4.399,00",
  "9789877387308",
  "800",
  "Español",
  "677881.jpg",
  "Cuando Edward Cullen y Bella Swan se conocieron en Crepúsculo; nació una historia de amor icónica. Pero hasta ahora; sus fans solo conocen la historia a través de Bella. Por fin los lectores podrán vivir la versión de Edward en la muy esperada novela Sol de medianoche. La inolvidable historia; contada a través de los ojos de Edward; toma un cariz nuevo y definitivamente oscuro. Conocer a Bella es lo más perturbador e intrigante que le ha sucedido en todos sus años como vampiro. A medida que se nos desvelan detalles fascinantes del pasado de Edward y la complejidad de sus pensamientos más íntimos; entenderemos por qué este es el conflicto interno que define su vida. ¿Cómo puede justificar los impulsos de su corazón si significan poner a Bella en peligro? En Sol de Medianoche; Stephenie Meyer nos transporta de nuevo a un mundo que ha cautivado a millones de lectores y nos trae una novela épica sobre los profundos placeres y las consecuencias devastadoras de un amor inmortal."
);

let libro2 = new Libro(
  "Despierta",
  "Lorena Pronsky",
  "$3.049,00",
  "9789501516227",
  "336",
  "Español",
  "677866.jpg",
  "La mayoría de las decisiones que tomamos en nuestra vida las hacemos estando dormidos. Casi arrastrados por un estado de inercia. Cuando reaccionamos; el paso ya está dado y el resto del tiempo nos quedamos ahí -atrapados- intentando hacer algo con eso que ni advertimos haber decidido. Hay cosas que no se deshacen. Querer intentarlo es verle la cara a la frustración. Por el contrario; se hace necesario un viaje a nuestro mundo interior. Si registramos lo que hacemos y sentimos; ganamos libertad y la posibilidad urgente de conocer nuestros deseos más profundos. ¿Quién soy? ¿Qué quiero? ¿Cómo lo quiero? Ser conscientes de lo que sentimos: decirlo; palparlo y nombrarlo son formas en las que logramos adueñarnos de nuestra vida. Cuanto antes despertemos a nuestro mundo interior; más sabias y honestas serán nuestras decisiones. Despierta es el paso hacia una existencia verdadera. Una invitación a conocernos y animarnos a pisar firme y fuerte. Siempre hacia donde nos guíen nuestros latidos. Sí. Los nuestros. Lorena Pronsky."
);

let libro3 = new Libro(
  "Confianza ciega",
  "John Katzenbach",
  "$4.399,00",
  "9789877801668",
  "592",
  "Español",
  "678518.jpg",
  "Cuando Maeve desaparece sin dejar rastro, su hija Sloane no se sorprende: si su madre tenía que desaparecer, solo podía ser en extrañas circunstancias. Sin embargo, esta vez es distinto: al cabo de unos días de la desaparición de su progenitora, Sloane recibe un paquete que esta misma le ha mandado, con varios miles de dólares, la escritura de su casa y un arma. También hay una nota con las siguientes palabras: 'Vendelo todo. Quedate la pistola. Practica. Huye. Ahora'. A solo dos semanas de graduarse como arquitecta y en medio de esta encrucijada personal, Sloane recibe la oferta de trabajo de un misterioso millonario que quiere construir seis memoriales para seis personas que murieron, de nuevo, en extrañas circunstancias. A medida que Sloane investiga esas muertes, el consejo de su madre se hace cada vez más presente. ¿En quién puede confiar ahora Sloane? ¿Tendrá tiempo de seguir las indicaciones de su madre cuando llegue al final del laberinto que ha ido creando su siniestro empleador?."
);

let libro4 = new Libro(
  "Cocinemos juntos",
  "Maru Botana",
  "$3.890,00",
  "9789876378697",
  "220",
  "Español",
  "677978.jpg",
  "Maru cocina junto a sus hijos y amigos sus mejores recetas del día a día. Este manual con recetario ayudará a los jóvenes, a los recién mudados y a todo aquel que se inicia en la cocina a preparar los platos más deliciosos: bebidas, entradas, principales, panes, postres y tortas. Todo con los eximios sabores y la simplicidad de Maru Botana."
);


/* 13 - Se muestran todos los libros (existentes en el HTML + los generados de forma dinámica) con el código sugerido. Se ha desagregado previamente el contenido del objeto pruebas del html */

let htmlNuevosLibros =
  libro1.getHtmlArticle() +
  libro2.getHtmlArticle() +
  libro3.getHtmlArticle() +
  libro4.getHtmlArticle();

let elemLibrosContainer = document.createElement("div");
let section = document.querySelector("section");
section.appendChild(elemLibrosContainer);
elemLibrosContainer.innerHTML += htmlNuevosLibros;


/* 14 - Se eliminan todos los <article> que están de prueba en el <section> */

let elemArticles = document.querySelectorAll("article");
for (let i = 0; i < elemArticles.length; i++) {
    if (elemArticles[i].id !== "article") {
        elemArticles[i].remove();
    }
}