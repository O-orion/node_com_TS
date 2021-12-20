import { Request, Response } from "express"

import { ListCategoriesUseCase } from "./listCategoriesUseCase"

class ListCategoriesController {
    constructor(private listCategorie: ListCategoriesUseCase){

    }

    handle(request: Request, response: Response): Response{
        const categoriesAll = this.listCategorie.execute()
        return response.json(categoriesAll)
    }
}

export { ListCategoriesController }
