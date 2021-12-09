import express from 'express'

const app = express()
app.listen('5555')

app.get("/" , (request, response) => {
    return response.send("JESUS CRISTO É O SENHOR!!")
})
