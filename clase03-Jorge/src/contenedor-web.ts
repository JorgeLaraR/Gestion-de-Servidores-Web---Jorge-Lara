// contenedor - dinamico .ts
import * as http from "http";
import { URL } from "url";
const servidor = http.createServer ((req , res) => {
 const url = new URL(req.url ?? "/", `http://${req.headers.host}`);
 if (url.pathname === "/hora-saludo") {
    const nombre = url.searchParams.get("nombre") ?? "visitante";
    const hora = new Date().getHours ();
    const saludo = hora < 12 ? "Buenos dias"
                : hora < 19 ? "Buenas tardes" : "Buenas noches";
    // Esto SI se calcula en cada peticion : cambia segun hora y nombre .
    res.writeHead (200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`<h1 >${saludo}, ${nombre}</h1 >`);
    return;
  }
  res.writeHead (404).end("No encontrado");
});
servidor.listen (3006 , () => console.log("Contenedor dinamico en :3006"));