import { Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategorieController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router()

categoriesRoutes.post("/categories", (request, response) => {
    createCategoryController.handle(request, response)
})

categoriesRoutes.get("/categories", (request, response) => {
    return listCategorieController.handle(request, response)
})

export {categoriesRoutes}