import { CategorieRepositorie } from "../../repository/CategoryRepository";
import { CreateCategories } from "./createCategories";
import { CreateCategoryController } from "./CreateCategoryController";





const categoriesRepository = new CategorieRepositorie()
const createCategorieUseCase = new CreateCategories(categoriesRepository)
const createCategoryController = new CreateCategoryController(createCategorieUseCase)

export { createCategoryController }


