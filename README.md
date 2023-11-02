# Trabajo integrador 2 - Carrera de Desarrollo Backend ADA ITW

## CONSIGNA

Desarrollar una app que permita acceder a una base de datos (`db.js`) y realizar distintas peticiones de información según los parámetros que ingrese el usuario por argumentos al llamar a `index.js`
La app constará de tres módulos, `index.js`, `books.js`, `db.js,` cada uno con las tareas indicadas debajo

### index.js

1. Recibe parametros desde la terminal, al invocar `index.js`
2. Procesa los parámetros obtenidos.
3. Delega las acciones a `books.js`
4. Los posibles parametros son:

- `node index.js`: Devuelve todos los libros.
- `node index.js --get 2`: Devuelve el libro con ID 2.
- `node index.js --tag drama`: Devuelve un array con todos los libros que tengan el tag drama.
- `node index.js --author jul`: Devuelve un array con todos los libros cuyo nombre de autor incluya la subcadena "jul".
- `node index.js --name viaje`: Devuelve un array con todos los libros cuyo nombre incluya la subcadena "viaje".

**Si el usuario ingresa cualquier otra cosa, devolver un mensaje de error.**

### books.js

1. Consta de funciones que actúan sobre los libros
2. Las funciones son:

- `getAll()`: Devuelve un array con todos los libros.
- `getById(id)`: Devuelve el libro cuyo ID es el indicado por parámetro.
- `getByAuthor(author)`: Devuelve un array con los libros cuyo nombre de autor contiene la subcadena indicada por parámetro.
- `getByTag(tag)`: Devuelve un array con los libros cuyo tag es el indicado por parámetro.
- `getByName(name)`: Devuelve un array con los libros cuyo nombre es el indicado por parámetro.

### db.js

1. Collección de objetos, cada objeto es un libro que contiene la siguiente estructura:

```javascript
{
id: 0,
name: "En busca del tiempo perdido",
author: "Marcel Proust",
tags: ["Ficción", "Filosofía", "Drama"]
}
```

**Es importante notar que los nombres de los autores, los nombres de los libros y las etiquetas comienzan con mayúsculas.**

---

## Requisitos para la entrega

1. El proyecto deberá realizarse de forma individual.
2. Una vez (y no antes) que el proyecto este finalizado en local, comprimir la carpeta en un archivo `.rar` y enviarla a **gabialberini733@gmail.com**.

#### Tutorial para convertir una carpeta en un archivo .rar

- [Link del tutorial:](https://www.youtube.com/watch?v=LOSnV4stFLQ)
