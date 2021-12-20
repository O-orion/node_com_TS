import { IEspecificationRepository, IRquestEspecificationDTO } from "../repository/IEspecificationRepostiory";

class CreateEspecification{

    constructor(private especificationRepository: IEspecificationRepository){}

    execute({name, description}: IRquestEspecificationDTO){
        const jaExistente = this.especificationRepository.findByName(name)
        if(jaExistente){
            throw new Error("Especificação já cadastrada!")
        }
        this.especificationRepository.create({ name, description })
    }
}

export { CreateEspecification }