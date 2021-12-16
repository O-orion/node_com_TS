import { Category } from "../model/Category";
import { ICategorieRepository } from "./ICategorieRepository";

interface ICategorie{
    name: string,
    description: string;
}

class CategorieRepositorie implements ICategorieRepository {

    private bdCategories: Category[];

    constructor(){
        this.bdCategories = []
    }

    findByName(name: string): Category {
        const category = this.bdCategories.find(categorie => categorie.name === name)
        return category
    }
     
    create( {name, description}: ICategorie):void {
        const categorieObj = new  Category() //criando uma categorie
        Object.assign(categorieObj, {name, description, created_at: new Date()}) //passando os valores sem acessa o atributo
        this.bdCategories.push(categorieObj)
        console.log(categorieObj)
    }

    list(): Category[]{
        return this.bdCategories
    }
    
}

export { CategorieRepositorie }