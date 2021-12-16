import { Category } from "../model/Category";

interface IRequest{
    name: string,
    description: string;
}

interface ICategorieRepository{
    findByName(name: string): Category;
    list(): Category[];
    create({name, description}: IRequest)
}

export { ICategorieRepository, IRequest}

