import { Router } from "express";
import { CategorieRepositorie } from "../repository/CategoryRepository";


const categoriesRoutes = Router()


categoriesRoutes.post("/categories", (request, response) => {
    const {name, description} = request.body;
    const categoryRepositorie = new CategorieRepositorie()
    // const categorieObj = {"name":name,"discription":discription, "id":uuidv4()}
    categoryRepositorie.create({name, description})
    response.status(201).send('Criado com sucesso')
})

export {categoriesRoutes}