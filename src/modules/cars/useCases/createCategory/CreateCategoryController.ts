import{ Request, Response } from "express"
import { CreateCategories } from "./createCategories";


class CreateCategoryController{
    constructor(private createCategoryUseCase: CreateCategories){}

    handle(request: Request, response: Response){
        const {name, description} = request.body;

       this.createCategoryUseCase.execute({name, description})

        response.status(201).send('Criado com sucesso')
    }

}

export { CreateCategoryController }