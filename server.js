import express from "express";

import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.get("/usuarios", async (req, res) => {

    const usuarios = await prisma.usuario.findMany();

    res.status(200).json(usuarios);
});

app.post("/cadastro", async (req, res) => {

    await prisma.usuario.create({
        data: {
            email: req.body.email,
            nome: req.body.nome,
            idade: req.body.idade
        }
    });

    res.status(201).json(req.body);
});

app.listen(3000, () => {
    console.log("Servidor rodando!");
});
