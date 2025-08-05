import express from "express";

const app = express();

app.use(express.json());

const usuarios = [];

app.get("/cadastro", (req, res) => {
    res.status(200).json(usuarios);
});

app.post("/cadastro", (req, res) => {
    const usuario = req.body;
    usuarios.push(usuario);
    res.status(201).json(usuario);
});

app.listen(3000, () => {
    console.log("Servidor rodando!");
});
