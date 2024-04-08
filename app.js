const express = require('express')
const app = express()
app.set('views', __dirname + '/views')
app.use(express.static('public'))

app.set('view engine', 'ejs')
const port = 3000

app.get('/', (req, res) => {
    res.render('calculator')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})