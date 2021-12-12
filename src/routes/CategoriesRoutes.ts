import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const categoriesRoutes = Router()
const bdCategories = []

categoriesRoutes.post("/categories", (request, response) => {
    const {name, discription} = request.body;
    const categorieObj = {"name":name,"discription":discription, "id":uuidv4()}

    bdCategories.push(categorieObj)

    response.status(201).send(bdCategories)
})

export {categoriesRoutes}