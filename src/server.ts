import express from 'express'

const app = express()
app.listen('5555')

app.get("/" , (request, response) => {
    console.log("SERVE ON!")
    return response.send("JESUS CRISTO É O SENHOR!!")
})
