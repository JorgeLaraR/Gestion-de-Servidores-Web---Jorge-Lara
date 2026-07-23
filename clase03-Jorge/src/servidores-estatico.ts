import * as http from "http";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const servidor = http.createServer((req, res) => {
    const archivo = path.join(dirname, "..", "publico", "saludo.html");

    fs.readFile(archivo, (error, contenido) => {
        if (error) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Archivo no encontrado");
            return;
        }

        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(contenido);
    });
});

servidor.listen(3005, () => console.log("Servidor estatico en :3005"));