import { Especification } from "../model/Especification";
import { IEspecificationRepository, IRquestEspecificationDTO } from "./IEspecificationRepostiory";

class EspecificationRepository implements IEspecificationRepository{

    private EspecificationBD: Especification[];

    constructor(){

        this.EspecificationBD = []
    }

    create({ name, description }: IRquestEspecificationDTO): void {

        const especificationOBJ = new Especification()

        Object.assign(especificationOBJ ,{ name , description, created_at: new Date()}) //construindo objeto

        this.EspecificationBD.push(especificationOBJ)
    }

    list(): Especification[] {
      return this.EspecificationBD
    }

    findByName(name: string): Especification {
        const especificationExists = this.EspecificationBD.find(especification => especification.name === name)
        return especificationExists
    }
}

export { EspecificationRepository }