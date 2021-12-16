import { CategorieRepositorie } from "../repository/CategoryRepository"
import { ICategorieRepository, IRequest } from "../repository/ICategorieRepository"


class CreateCategories{

    constructor(private categoriesRepository: ICategorieRepository){}

    execute({name, description}: IRequest){
        const categorieExistente =  this.categoriesRepository.findByName(name)
        if(categorieExistente){
            throw new Error("Categorie já cadastrada!")
        }
        // const categorieObj = {"name":name,"discription":discription, "id":uuidv4()}
        this.categoriesRepository.create({name, description})
    }

}

export { CreateCategories }