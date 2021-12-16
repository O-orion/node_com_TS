import { response, Router } from "express";
import { CategorieRepositorie } from "../repository/CategoryRepository";


const categoriesRoutes = Router()
const categoryRepositorie = new CategorieRepositorie()


categoriesRoutes.post("/categories", (request, response) => {
    const {name, description} = request.body;
    const categorieExistente =  categoryRepositorie.findByBNome(name)
    if(categorieExistente){
        return response.status(400).json({"ERROR": "Categoria já cadastrada!"})
    }
    // const categorieObj = {"name":name,"discription":discription, "id":uuidv4()}
    categoryRepositorie.create({name, description})


    response.status(201).send('Criado com sucesso')
})

categoriesRoutes.get("/categories", (request, response) => {
    const categoriesAll = categoryRepositorie.list()
    response.json(categoriesAll)
})

export {categoriesRoutes}