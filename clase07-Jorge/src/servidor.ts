import express , { type Request , type Response } from "express";

const app = express();
app.use(express.json());
const PORT = 3000;

app.get("/", (req: Request , res: Response) => {
    res.send(`<h1 >Contenedor de libre distribucion activo en el ${PORT}</h1>`);
});

app.get("/saludo", (req: Request , res: Response) => {
 const nombre = (req.query.nombre as string) ?? "desconocido";
 res.send(`<h1 >Hola , ${nombre }!</h1 >`);
});

app.post("/saludo", (req: Request, res: Response) => {
    const nombre = req.body.nombre ?? "desconocido";

    res.send(`<h1>Hola, ${nombre}!</h1>`);
});

app.get("/info", (req: Request , res: Response) => {
    res.json({
        fechaServidor: new Date().toISOString (),
        userAgent: req.headers["user-agent"],
    });
});

// Ruta 3: calculo dinamico -- total con IVA (13 %, El Salvador )
app.get("/cotizacion", (req: Request , res: Response) => {
    const monto = parseFloat ((req.query.monto as string) ?? "0");
    if (isNaN(monto) || monto < 0) {
        res.status (400).json({ error: "monto invalido" });
        return;
    }
    const totalConIva = monto * 1.13;
    res.json({ montoOriginal: monto , iva: monto * 0.13, total: totalConIva });
});

app.get("/factorial", (req: Request, res: Response) => {
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

app.listen(PORT , () => {
    console.log(`Estoy corriendo en http://localhost:${PORT}`);
});

