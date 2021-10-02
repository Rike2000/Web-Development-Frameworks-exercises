const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');



app.use(bodyParser.json());

let user = [{
    id: uuidv4(),
    firstName: "Riku",
    lastName: "Orbinski",
    address: "Kamanakuja2"
}]

let product = [{
    name: "banana",
    manufacturer: "prisma",
    category: "fruit",
    description: "",
    price: 3
}]

let invoice =[{
    id: uuidv4(),
    firstName: "",
    lastName: "",
    productsBought: "",
    total: 2

}]


app.get('/', (req, res) => {
  res.send('Welcome to my API exercise')
})

  //get all users
app.get('/user', (req, res) => {
    res.send(user);
  })

  //get all products
app.get('/product', (req, res) => {
    res.json(product);
  })

  //get product by name
app.get('/product/name/:name', (req, res) => {

    const result = product.find(user => user.name === req.params.name)
    res.send(result);
  })

  //get product by manufacturer
  app.get('/product/manufacturer/:manufacturer', (req, res) => {

    const result = product.filter(product => product.manufacturer === req.params.manufacturer)
    res.send(result);
  })

  //get product by category
  app.get('/product/category/:category', (req, res) => {

    const result = product.filter(product => product.category === req.params.category)
    res.send(result);
  })

  //get invoice by user
  app.get('/invoice/:lastName', (req, res) => {
    const result = invoice.filter(invoice => invoice.lastName === req.params.lastName)
    res.send(result);
  })

   //get invoice by id
  app.get('/invoice/id/:id', (req, res) => {

  const result = invoice.filter(invoice => invoice.id === req.params.id)
  res.send(result);
  })

  //delete invoice by id
  app.get('/invoice/delete/:id', (req, res) => {

    const result = invoice.findIndex(invoice => invoice.id === req.params.id)
    if (result !== -1) {
      invoice.splice(result, 1);
      res.send("Invoice deleted")
    } else {
      res.send("No invoice found. Check invoice ID")
    }
    })

  //add new user
app.post('/user', (req, res) => {
    console.log("creating new user");
    user.push({
        id: uuidv4(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address
    })
    res.send("new user created");
  })

  // add new product
  app.post('/product', (req, res) => {
    console.log("creating new product");
    product.push({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price
    })
    res.send("new product created");
  })

  //modify product
  app.put('/product/:name', (req, res) =>{
    const result = product.findIndex(product => product.name === req.params.name)
    if (result !== -1) {
      product.splice(result, 1);
      product.push({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price
    })
    res.send("Product modified")
    } else {
        res.send("This product doesn't exist")
    }
  })

  //add new invoice
  app.post('/invoice', (req, res) => {
    console.log("creating new invoice");
    invoice.push({
      id: uuidv4(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      productsBought: req.body.productsBought,
      total: req.body.total
    })
    res.send("new invoice created");
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})