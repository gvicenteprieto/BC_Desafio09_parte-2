# Bootcamp Full Stack Engineer > educaciónIT

## Entrega Desafío Grupal

## BC_Desafio09_parte-2_Ivan-Castro-Arca_Guillermo-Vicente

### Authors

- [Ivan Castro Arca](https://github.com/ivanaca777)

- [Guillermo Vicente](https://github.com/gvicenteprieto)

### Description

- Desafío grupal del bootcamp de Full Stack de [educaciónIT](https://www.educacionit.com/)

#### Parte 2

- Copiar de la parte 1 el constructor Libro del archivo JS. Cerrar el proyecto anterior para evitar confusiones y abrir la carpeta con la 2da parte en VSCode. Abrir el HTML directamente en el browser, con y sin Live Server, para ver cómo se comporta.

7 - Pegar en el JS el constructor Libro de la parte anterior. Modificar el constructor Libro para que reciba todos estos parámetros:
titulo, autor, precio, isbn, paginas, idioma, foto, sinopsis.

8 - Utilizar los parámetros recibidos para asignárselos a propiedades del objeto que tengan el mismo nombre.

9 - Crear un nuevo objeto con esta información de prueba:
let libro1 = new Libro(
  'Carrie',
  'Stephen King',
  '$2.399',
  '9789871138999',
  '256',
  'Español',
  'foto.jpg',
  'El legendario debut de Stephen King, sobre una marginada adolescente y la venganza que ejerce sobre sus compañeros de clase.'
)

Visualizar en la consola si el objeto quedó bien construido, probando acceder a sus propiedades.

10 - Crear en el constructor Libro el método getHtmlArticle() que retorne el HTML (un string) correspondiente a un article como los de prueba que están dentro del section id="libros" del HTML (En la carpeta img existe el archivo "foto.jpg" para utilizar para este objeto de prueba.), pero utilizando los valores almacenados en sus propias propiedades para generar el contenido HTML.

11 - De forma dinámica, agregar al contenido existente en el section del DOM el contenido generado por getHtmlArticle() del objeto libro1 creado en el punto 9.

Si esto funciona adecuadamente en el browser deberían ahora figurar otro libro después de los dos ya existentes en el código HTML original.

12 - Instanciar 4 objetos Libro para crear 4 libros a partir de los datos de libros reales comentados en el archivo JS.

13 - Lograr que el siguiente código muestre todos los libros (existentes en el HTML + los generados de forma dinámica) en el section ubicado en el HTML:
  let htmlNuevosLibros = libro1.getHtmlArticle()
                       + libro2.getHtmlArticle()
                       + libro3.getHtmlArticle()
                       + libro4.getHtmlArticle()
  elemLibrosContainer.innerHTML += htmlNuevosLibros

14 - Eliminar todos los article que están de prueba en el section del HTML, dejando solo el h1 existente.

Si todo funciona adecuadamente, JS debería cargar el section con todos los libros instanciados a partir del constructor Libro.
