import * as http from "http";
import { URL } from "url";

// route handler -- equivalente a un servlet
function manejarSaludo (nombre: string): string {
    return `<h1 >Hola , ${nombre }!</h1 >
    <p> Bienvenido a tu primer contenedor web.</p>`;
}

function manejarDespedida (nombre: string): string {
    return `<h1 >Adios mijo , ${nombre }!</h1 >
    <p> Te vemos luego en esta web bro XD.</p>`;
}

// el " contenedor ": decide QUE handler ejecutar segun la ruta
const servidor = http.createServer ((req , res) => {
const url = new URL(req.url ?? "/", `http://${req.headers.host}`);

if (url.pathname === "/saludo") {
 const nombre = url.searchParams.get("nombre") ?? "desconocido";
 res.writeHead (200, { "Content-Type": "text/html; charset=utf-8" });
 res.end(manejarSaludo(nombre));
 return;
}
if (url.pathname === "/suma") {
 const a = Number (url.searchParams.get("a") ?? 0);
 const b = Number (url.searchParams.get("b") ?? 0);
 res.writeHead (200 , { "Content-Type": "text/plain; charset=utf-8"
});
 res.end(`El resultado de ${a} + ${b} es ${a + b}`);
 return ;
}

if (url.pathname === "/despedida") {
 const nombre = url.searchParams.get("nombre") ?? "desconocido";
 res.writeHead (200, { "Content-Type": "text/html; charset=utf-8" });
 res.end(manejarDespedida(nombre));
 return;
}

res.writeHead (404, { "Content-Type": "text/plain" });
res.end("Ruta no encontrada");
});






servidor.listen (3000 , () => console.log("Escuchando en :3000"));