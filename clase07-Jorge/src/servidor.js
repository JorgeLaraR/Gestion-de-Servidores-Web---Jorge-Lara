import express, {} from "express";
const app = express();
app.use(express.json());
const PORT = 3000;
app.get("/", (req, res) => {
    res.send(`<h1 >Contenedor de libre distribucion activo en el ${PORT}</h1>`);
});
app.get("/saludo", (req, res) => {
    const nombre = req.query.nombre ?? "desconocido";
    res.send(`<h1 >Hola , ${nombre}!</h1 >`);
});
app.post("/saludo", (req, res) => {
    const nombre = req.body.nombre ?? "desconocido";
    res.send(`<h1>Hola, ${nombre}!</h1>`);
});
app.get("/info", (req, res) => {
    res.json({
        fechaServidor: new Date().toISOString(),
        userAgent: req.headers["user-agent"],
    });
});
// Ruta 3: calculo dinamico -- total con IVA (13 %, El Salvador )
app.get("/cotizacion", (req, res) => {
    const monto = parseFloat(req.query.monto ?? "0");
    if (isNaN(monto) || monto < 0) {
        res.status(400).json({ error: "monto invalido" });
        return;
    }
    const totalConIva = monto * 1.13;
    res.json({ montoOriginal: monto, iva: monto * 0.13, total: totalConIva });
});
app.get("/factorial", (req, res) => {
    const n = Number(req.query.n);
    if (!Number.isInteger(n) || n < 0) {
        res.status(400).json({
            error: "n debe ser un entero no negativo"
        });
        return;
    }
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    res.json({
        n: n,
        factorial: factorial
    });
});
app.listen(PORT, () => {
    console.log(`Estoy corriendo en http://localhost:${PORT}`);
});
//# sourceMappingURL=servidor.js.map