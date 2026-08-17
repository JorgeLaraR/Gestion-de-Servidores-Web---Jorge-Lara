# ACTIVIDAD DE LA CLASE 8 


## LA ACTIVIDAD ESTA EN LA CARPETA CLASE 07 !!!


## Descripción
En esta clase trabajé con un servidor Express usando TypeScript. La actividad consistió en crear diferentes rutas dinámicas que reciben datos, los validan y devuelven respuestas en HTML o JSON.

El servidor se ejecuta utilizando Node.js y Express en el puerto 3000.

## Rutas que ya habiamos hecho
### 1. GET /saludo

Esta ruta recibe un nombre mediante un parámetro en la URL.

Ejemplo:

`GET /saludo?nombre=Jorge`

Devuelve un saludo personalizado en HTML:

```html
<h1>Hola, Jorge!</h1>
```

Si no se envía un nombre, utiliza "desconocido".

### 2. GET /info

Esta ruta muestra información del servidor en el momento en que se realiza la petición.

Ejemplo:

`GET /info`

Devuelve información en formato JSON:

- La fecha y hora actual del servidor.
- El User-Agent del navegador que realizó la petición.

La fecha se genera usando `new Date().toISOString()`, por lo que cambia en cada petición.

### 3. GET /cotizacion

Esta ruta calcula el IVA del 13% sobre un monto recibido como parámetro.

Ejemplo:

`GET /cotizacion?monto=100`

La respuesta contiene:

```json
{
  "montoOriginal": 100,
  "iva": 13,
  "total": 113
}
```

También se agregó validación para evitar montos negativos o valores que no sean números. Cuando el dato es inválido, el servidor responde con código HTTP 400.

### 4. GET /factorial - LA RUTA NUEVA QUE HICE

Esta fue la ruta nueva que agregué al ejercicio.

Recibe un número `n` y calcula su factorial.

Ejemplo:

`GET /factorial?n=5`

Respuesta:

```json
{
  "n": 5,
  "factorial": 120
}
```

También se validó que `n` sea un número entero y que no sea negativo. Si el valor no cumple estas condiciones, se devuelve un error con código HTTP 400.

Por ejemplo:

`GET /factorial?n=-5`

Devuelve:

```json
{
  "error": "n debe ser un entero no negativo"
}
```

## Reto adicional - POST /saludo - EL EXTRA QUE HICE DEL POST

Como parte del reto adicional, hice que la ruta `/saludo` también pudiera recibir peticiones POST.

Para poder leer información en formato JSON agregué:

```ts
app.use(express.json());
```

Después agregué una ruta POST que obtiene el nombre desde el body de la petición.

Ejemplo de body:

```json
{
  "nombre": "Jorge"
}
```

La respuesta es:

```html
<h1>Hola, Jorge!</h1>
```

Esta parte la probé utilizando Postman.

## Pruebas

Las rutas fueron probadas desde el navegador y utilizando Postman. También comprobé los casos de error, especialmente las respuestas con código HTTP 400 cuando se envían datos inválidos.