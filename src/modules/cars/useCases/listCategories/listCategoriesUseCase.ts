import { Category } from "../../model/Category";
import { CategorieRepositorie } from "../../repository/CategoryRepository";


class ListCategoriesUseCase {
    constructor( private categoriesRepository: CategorieRepositorie) {}

    execute(): Category[] {
        const categories = this.categoriesRepository.list()
        return categories
    }
}

export { ListCategoriesUseCase }