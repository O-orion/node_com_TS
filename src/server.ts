import express from 'express'
import { categoriesRoutes } from './routes/CategoriesRoutes'
import { especificationRoutes } from './routes/EspecificationRoutes'

const app = express()
app.listen('5555')

app.use(express.json())

app.use(categoriesRoutes, especificationRoutes)

app.get("/" , (request, response) => {
    console.log("SERVE ON!")
    return response.send("JESUS CRISTO É O SENHOR!!")
})
