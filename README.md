# RegistraTuPeludo

Este proyecto es una aplicación web responsiva diseñada para aquellas veterinarias que tienen inconvenientes con mantener un registro de sus citas rápidas. Solucionando así problemas cotidianos en las que se encuentran las mismas.\

Los enfoques principales que se busca es a una interfáz limpia y fácil de manejar para todo público, un diseño responsivo para que sea adsequible en los diferentes accesos de internet, y la velocidad para crear registros. Todo esto con el fin de que cualquier persona pueda hacer uso de la misma, desde cualquier plataforma y de forma eficaz.

## ¿De dónde surge el proyecto?

Este proyecto nace desde el interés de aportar a las veterinarias con producto que pueda ser adsequible por cualquier persona, mientra a la vez convertir registros en procesos eficaces frente a la gran volumenes de citas al día ( ya sea personal ó empresarial ).

## ¿Cómo funciona el proyecto?

### En términos funcionales

La aplicación web contiene principalmente un formulario para el registro de citas, se puede observar a la izquierda si tenemos una pantalla con resolución igual o mayor a 992px ó arriba si tenemos una pantalla inferior a 992px. Este formulario sirve para registrar tu cita./

Cuando registras tu cita aparece un apartado con las citas a la derecha si tienes la pantalla mayor a 992px o abajo si tienes una inferior. En esta cita te aparece los datos registrados en el formulario, añadiendo la hora y fecha del registro./

Cuando presionamos la cita nos aparecerá una alerta preguntando que si estamos seguros que queremos eliminar la cita, y al presionar que sí se desaparecera./

Al momento de referirnos de una eficacia, nos referimos a que los registros se convierten rápidos y a la mano. No se gestiona una base de datos, por lo cual las citas solo aparecera en el dispositivo donde se esta haciendo uso la aplicación.

### En términos técnicos

El proyecto fue desarrollado con JavaScript y su framework ReactJS ( hooks ), JSX para el simulador del HTML, CSS y CSS-in-JS en las hojas de estilos de los componentes, Bootstrap y React-Bootstrap como bibliotecas de estilos CSS./

Como se dijo anteriormente, en ReactJS se trabajó en su absoluto con hooks básicos. El almacenamiento de las citas se guarda en el localStorage, por lo tanto la aplicación es solo frontend, y no tiene servidor, ni base de datos.

Las unicas dependencias adicionales son bootstrap, react-bootstrap ( ya explicadas anteriormente ) y uuid que nos funciona para crear identificadores unicos de cada cita y poder iterarlos.

## ¿Cómo descargar el proyecto?

### `VS CODE, GIT y NODE`

Principalmente tenemos que tener descargados VS CODE, GIT y NODE ( npm ).
Recomiendo que se investigue acerca del uso de GIT y la instalación VS CODE y NODE, ya que acá no indagaremos mucho en esto.

### `git clone https://github.com/JakoPapaFrita/veterinaria`

Para comenzar la descarga, tenemos que crear una carpeta nueva ( donde vayamos a guardar la aplicación ) y en la consola de GIT poner este comando. Así se clonará este repositorio y tendremos el código a nuestra mano.

### `npm install`

Para instalar todas las dependencias y el proyecto, se debe ejecutar este comando en la consola de VS CODE o de nuestro ordenador ubicado en la carpeta donde está el repositorio clonado.

### `npm start`

Para iniciar la aplicación ejecutamos este comando en la consola seleccionada anteriormente, y en el navegador se nos abrirá el proyecto, en caso de que no sea así puedes buscar en el navegador: 'http://localhost:3000/'

## Preguntas, problemas ó sugerencias

Esta aplicación es libre de descarga para cualquier persona,/

Cualquier problema, pregunta ó sugerencia puede ser comunicado a este correo: 'jacouribe2003@gmail.com'



