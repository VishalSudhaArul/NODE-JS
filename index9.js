import express from 'express'
const app = express()
app.listen(8080);

const logger = () => {

}
app.use (logger)
app.get("/", (req, res) => {
    // res.json({ message: 'Hello World'});
    //res.send('Hello World');
    res.send({name:"john",age:21})
})

