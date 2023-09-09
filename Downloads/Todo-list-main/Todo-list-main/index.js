const express = require('express')
const app = express()
const port = 3000
const ejs = require('ejs')


app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.set("view engine", "ejs")

const todoArr =[]
app.get("/", (req,res) => {
    res.render("index")
    // console.log(__dirname);
    // res.sendFile(__dirname + "/index.html")
})



app.get('/todo', (req,res) => {
    res.render("todo", {todoArr})
})

app.post("/todo", (req,res) => {
    console.log(req.body);
    let todoItem = req.body;
    todoArr.push(todoItem)
    res.redirect("/todo")
})

// for the delete button
app.get("/delete/:id", (req,res) => {
    let id = req.params.id;
    console.log(id);
    todoArr.splice(id,1)
    res.redirect("/todo")
})

// for the edit page
app.get("/edit/:id", (req,res) => {
    let id = req.params.id

    res.render("edit", {todoArr, id})
    
})

app.post("/edit", (req,res) => {
    console.log(req.body);
    let id = req.params.id
    let todoIt = req.body;
    todoArr.splice(id, 1, todoIt)
    res.redirect("/todo")
})

app.listen(port, () =>{
     
    // console.log(`Example app listening on port ${port}!`)
    // console.log('how far')
    // console.log('well she don mess up')

})