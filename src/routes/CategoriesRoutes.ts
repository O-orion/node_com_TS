import { Router } from "express";
import { CategorieRepositorie } from "../repository/CategoryRepository";
import { CreateCategories } from "../services/createCategories";


const categoriesRoutes = Router()
const categoryRepositorie = new CategorieRepositorie()
const serviceCategorie = new CreateCategories(categoryRepositorie)


categoriesRoutes.post("/categories", (request, response) => {
    const {name, description} = request.body;
    serviceCategorie.execute({name, description})
    response.status(201).send('Criado com sucesso')
})

categoriesRoutes.get("/categories", (request, response) => {
    const categoriesAll = categoryRepositorie.list()
    response.json(categoriesAll)
})

export {categoriesRoutes}