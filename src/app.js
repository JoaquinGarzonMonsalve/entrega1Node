import express from 'express';

import productosRouter from './routes/productos.router.js';
// import usuariosRouter from './routes/usuario.router.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


// routers
app.use("/api/product", productosRouter);
// app.use("/api/user", usuariosRouter);


app.get('/', (req, res) => {
    res.send("probando servirdor");
});

const SERVER_PORT = 9090;
app.listen(SERVER_PORT,()=>{
    console.log(`  servidor escuchando por puerto${SERVER_PORT} `);
});