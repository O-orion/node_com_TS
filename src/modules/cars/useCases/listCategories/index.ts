import { CategorieRepositorie } from "../../repository/CategoryRepository";
import { ListCategoriesController } from "./listCategoriesController";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";


const categorieRepository = new CategorieRepositorie()
const listCategoriesUseCase = new ListCategoriesUseCase(categorieRepository)
const listCategorieController = new ListCategoriesController(listCategoriesUseCase)

export { listCategorieController }