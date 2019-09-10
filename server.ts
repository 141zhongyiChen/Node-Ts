// console.log('node-typescript-api')

import express from 'express'

const app = express()

app.get('/', (req, res, next) => {
    res.send('node tyscript api')
})

app.listen(process.env.PORT || 8080, () => {
    console.log('Server is listening...')
})