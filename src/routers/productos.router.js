import { Router } from "express";

const router = Router();

let productos =[
    {id:1,name :"zapatos"},
    {id:2,name :"Deportes"},
    {id:3,name :"electronicos"},
]

// armar los endpoints

router.get('/', (req, res) =>{
    console.log('listado de productos');
    console.log(productos);
    res.sedn(productos);

});

router.get('/:id', (req, res) =>{
    console.log('req.params'); //url
    console.log(req.query); //url/queryParams
    const productid = parseInt(req.query.id);

    if(productId){
        let productIndex = productos.findIndex((p)=> p.id === productid);
        res.send(productIndex===-1 ? "producto no encontrado0": productos[productIndex]);
    }
    else{
        res.status(404).send({error:"404",menssage: "el id es incalido o no existe"});
    }

    })


export default router;