import { response, Router } from "express";
import { EspecificationRepository } from "../modules/cars/repository/EspecificationRepository";
import { CreateEspecification } from "../modules/cars/services/CreateEspecification";

const especificationRoutes = Router()
const especificationRepository = new EspecificationRepository
const especificationService = new CreateEspecification(especificationRepository)

especificationRoutes.post("/especification", (request,response) => {
    const {name, description} = request.body
    especificationService.execute({name, description})
    response.status(201).json({"SUCESSO": "Especificação criada com sucesso!"})
})

especificationRoutes.get("/especification", (request, response) => {
    const especificationsAll = especificationRepository.list()
    response.json(especificationsAll)
})

export { especificationRoutes }
