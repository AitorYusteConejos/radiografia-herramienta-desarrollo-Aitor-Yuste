# Página Top Animes

Esta página presenta distintas categorías de anime y un carrusel con algunas de mis series favoritas.

## Cómo ejecutarla en local

1. Abre una terminal en la raíz del proyecto.
2. Ejecuta el comando: `python3 -m http.server 8000`.
3. En el navegador, abre: http://localhost:8000/index/
4. En la terminal, pulsa **Ctrl+C** para detener el servidor.

## Funcionalidades añadidas

1. Al pulsar las flechas del carrusel, se indica qué flecha se ha pulsado y en qué diapositiva se encuentra actualmente.
2. El botón «Más información» muestra información sobre la página y, al volver a pulsarlo, la oculta.
3. Las tarjetas de la lista de animes se generan a partir de un array de datos guardado en un archivo JavaScript.
4. El buscador filtra los animes a medida que se escribe, buscando coincidencias en el título o la categoría y ocultando los que no coinciden.