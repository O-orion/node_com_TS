import { Especification } from "../model/Especification";

interface IRquestEspecificationDTO{
    name: string,
    description: string
}

interface IEspecificationRepository{
    create({name, description}: IRquestEspecificationDTO)
    list(): Especification[]
    findByName(name:string): Especification

}

export { IEspecificationRepository, IRquestEspecificationDTO }