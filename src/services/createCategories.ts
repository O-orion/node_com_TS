import { CategorieRepositorie } from "../repository/CategoryRepository"

interface IRequest{
    name: string,
    description: string;
}

class CreateCategories{

    constructor(private categoriesRepository: CategorieRepositorie){}

    execute({name, description}: IRequest){
        const categorieExistente =  this.categoriesRepository.findByBNome(name)
        if(categorieExistente){
            throw new Error("Categorie já cadastrada!")
        }
        // const categorieObj = {"name":name,"discription":discription, "id":uuidv4()}
        this.categoriesRepository.create({name, description})
    }

}

export { CreateCategories }