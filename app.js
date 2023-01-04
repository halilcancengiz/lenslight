import express from "express"

const app = express()
const PORT = 5000


app.get("/", (req, res) => {
    res.send("INDEX PAGE")
})

app.listen(PORT, () => {
    console.log(`Application running on ${PORT}`)
})