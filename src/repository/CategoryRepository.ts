import { Category } from "../model/Category";

interface ICategorie{
    name: string,
    description: string;
}

class CategorieRepositorie {

    private bdCategories: Category[];

    constructor(){
        this.bdCategories = []
    }
     
    create( {name, description}: ICategorie):void {
        const categorieObj = new  Category() //criando uma categorie
        Object.assign(categorieObj, {name, description, created_at: new Date()}) //passando os valores sem acessa o atributo
        this.bdCategories.push(categorieObj)
        console.log(categorieObj)
    }
}

export { CategorieRepositorie }