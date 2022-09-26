const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.listen(port, () => {
    console.log(`Hello World app listening on port ${port}`)
})

// Setting Templates
app.set('view engine', 'ejs')


const user = {
    firstName: 'Ryan',
    lastName: 'Rhoades'
}

// Creating Routes
app.get('/', (req, res) => {
    res.render('pages/index', { user: user })
})

const rangers = {
    red: 'Jason',
    green: 'Tommy',
    blue: 'Billy',
    pink: 'Kimberly',
    yellow: 'Trini',
    black: 'Zack',
    white: 'Tommy'
}

app.get('/rangers', (req, res) => {
    res.render('pages/rangers', {rangers:rangers})
})

// Dynamic Routes
app.get('/:color/ranger', (req, res, next) => {
    console.log("Timestamp: ", Date())
    next()   
    
}, (req, res, next) => {
    res.render('pages/action', {ranger:req.params})
})
//  Middleware
// app.use((req, res, next) => {
//     console.log("Timestamp: ", Date())
//     next()
// }, (req, res, next) => {
//     console.log("This is what happens next")
//     next()
// }
// )

app.use(express.static(path.join(__dirname, 'public')))